import { describe, expect, it } from "vitest";
import type { CollectionEntry } from "astro:content";
import { findProjectByShortlink, isPublished } from "@/utils/projects";

function project(
  id: string,
  data: { shortlink?: string; draft?: boolean },
): CollectionEntry<"projects"> {
  return { id, data } as unknown as CollectionEntry<"projects">;
}

const projects = [
  project("bingo", { shortlink: "bingo" }),
  project("chatjack", { shortlink: "cj" }),
  project("wip", { shortlink: "wip", draft: true }),
  project("no-shortlink", {}),
];

describe("findProjectByShortlink", () => {
  it("finds the project with a matching shortlink", () => {
    expect(findProjectByShortlink(projects, "cj", true)?.id).toBe("chatjack");
  });

  it("returns undefined for an unknown shortlink", () => {
    expect(findProjectByShortlink(projects, "nope", true)).toBeUndefined();
  });

  it("hides drafts in production", () => {
    expect(findProjectByShortlink(projects, "wip", true)).toBeUndefined();
  });

  it("shows drafts outside production", () => {
    expect(findProjectByShortlink(projects, "wip", false)?.id).toBe("wip");
  });
});

describe("isPublished", () => {
  it("hides drafts in production", () => {
    expect(isPublished({ data: { draft: true } } as never, true)).toBe(false);
  });

  it("shows drafts outside production", () => {
    expect(isPublished({ data: { draft: true } } as never, false)).toBe(true);
  });

  it("shows non-drafts everywhere", () => {
    expect(isPublished({ data: {} } as never, true)).toBe(true);
  });
});
