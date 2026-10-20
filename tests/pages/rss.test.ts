import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("astro:content", () => ({
  getCollection: async () => [
    {
      id: "old-project",
      data: {
        title: "Old project",
        description: "Old",
        pubDate: new Date("2020-01-01"),
      },
    },
    {
      id: "new-project",
      data: {
        title: "New project",
        description: "New",
        pubDate: new Date("2024-01-01"),
      },
    },
    {
      id: "draft-project",
      data: {
        title: "Draft project",
        description: "Draft",
        pubDate: new Date("2025-01-01"),
        draft: true,
      },
    },
  ],
}));

async function feed() {
  vi.resetModules();
  const { GET } = await import("@/pages/rss.xml.js");
  const res = await GET({ site: new URL("https://tadjh.com") });
  return res.text();
}

function links(xml: string) {
  return [...xml.matchAll(/<link>(.*?)<\/link>/g)].map((m) => m[1]);
}

describe("/rss.xml", () => {
  // The feed globs and compiles every MDX page on first import, which can
  // take several seconds on a cold cache, so warm it outside the tests
  beforeAll(async () => {
    await import("@/pages/rss.xml.js");
  }, 30_000);

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("lists projects and standalone pages, newest first", async () => {
    vi.stubEnv("PROD", false);
    const xml = await feed();
    expect(links(xml)).toEqual([
      "https://tadjh.com/", // channel link
      "https://tadjh.com/projects/draft-project/",
      "https://tadjh.com/projects/new-project/",
      "https://tadjh.com/about/",
      "https://tadjh.com/projects/old-project/",
    ]);
  });

  it("leaves out draft projects in production", async () => {
    vi.stubEnv("PROD", true);
    const xml = await feed();
    expect(links(xml)).not.toContain(
      "https://tadjh.com/projects/draft-project/",
    );
    expect(links(xml)).toContain("https://tadjh.com/projects/new-project/");
  });
});
