import { afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "@/pages/rss.xml.js";

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

// GET reads import.meta.env.PROD per call, so vi.stubEnv applies without a reload
async function feed() {
  const res = await GET({ site: new URL("https://tadjh.com") });
  return res.text();
}

function links(xml: string) {
  return [...xml.matchAll(/<link>(.*?)<\/link>/g)].map((m) => m[1]);
}

describe("/rss.xml", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("lists projects and standalone pages, newest first", async () => {
    vi.stubEnv("PROD", false);
    const xml = await feed();
    const items = links(xml).slice(1); // skip the channel link
    // Only the mocked projects are fixed; real pages with a pubDate may sit
    // anywhere between them, so check relative order, not exact positions
    const projects = items.filter((link) => link.includes("/projects/"));
    expect(projects).toEqual([
      "https://tadjh.com/projects/draft-project/",
      "https://tadjh.com/projects/new-project/",
      "https://tadjh.com/projects/old-project/",
    ]);
    expect(items).toContain("https://tadjh.com/about/");
    const dates = [...xml.matchAll(/<pubDate>(.*?)<\/pubDate>/g)].map((m) =>
      Date.parse(m[1]),
    );
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
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
