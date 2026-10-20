import type { APIContext } from "astro";
import { describe, expect, it } from "vitest";
import { GET as audio } from "@/pages/audio/index";
import { GET as donate } from "@/pages/donate/[project]";
import { GET as music } from "@/pages/music/index";
import { GET as robots } from "@/pages/robots.txt";

// Just enough of Astro's APIContext for these routes. The redirect has no
// default status, so tests only pass when the route sets one explicitly.
function context(params: Record<string, string> = {}) {
  return {
    params,
    redirect: (location: string, status?: number) =>
      new Response(null, { status, headers: { Location: location } }),
  } as unknown as APIContext;
}

describe("redirect routes", () => {
  it("/audio redirects to tadjhbrooks.com", async () => {
    const res = await audio(context());
    expect(res.status).toBe(307);
    expect(res.headers.get("Location")).toBe("https://tadjhbrooks.com");
  });

  it("/music redirects to tadjhbrooks.com", async () => {
    const res = await music(context());
    expect(res.status).toBe(307);
    expect(res.headers.get("Location")).toBe("https://tadjhbrooks.com");
  });

  it("/donate/chatjack redirects to its PayPal page", async () => {
    const res = await donate(context({ project: "chatjack" }));
    expect(res.status).toBe(307);
    expect(res.headers.get("Location")).toMatch(
      /^https:\/\/www\.paypal\.com\/donate\/\?hosted_button_id=/,
    );
  });

  it.each(["nope", "constructor", "toString", "__proto__"])(
    "/donate/%s redirects home",
    async (project) => {
      const res = await donate(context({ project }));
      expect(res.status).toBe(302);
      expect(res.headers.get("Location")).toBe("https://tadjh.com");
    },
  );
});

describe("/robots.txt", () => {
  it("allows everything and points to the sitemap", async () => {
    const res = await robots(context());
    expect(res.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    const body = await res.text();
    expect(body).toContain("User-agent: *\nAllow: /");
    expect(body).toContain("Sitemap: https://tadjh.com/sitemap-index.xml");
  });
});
