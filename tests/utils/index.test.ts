// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  composeKey,
  isIFrame,
  isImage,
  isVideo,
  toggleScrollbar,
} from "@/utils/index";

describe("composeKey", () => {
  it("joins the label with a 1-based index", () => {
    expect(composeKey("task", 0)).toBe("task-1");
    expect(composeKey("task", 4)).toBe("task-5");
  });
});

describe("media type checks", () => {
  it.each([
    ["clip.mp4", true],
    ["clip.WEBM", true],
    ["clip.mov", false],
    ["mp4.png", false],
  ])("isVideo(%s) is %s", (path, expected) => {
    expect(isVideo(path)).toBe(expected);
  });

  it.each([
    ["photo.jpg", true],
    ["photo.JPEG", true],
    ["photo.png", true],
    ["photo.gif", true],
    ["photo.webp", true],
    ["photo.svg", false],
    ["photo.png.mp4", false],
  ])("isImage(%s) is %s", (path, expected) => {
    expect(isImage(path)).toBe(expected);
  });

  it.each([
    ["demo.iframe", true],
    ["demo.IFRAME", true],
    ["demo.html", false],
  ])("isIFrame(%s) is %s", (path, expected) => {
    expect(isIFrame(path)).toBe(expected);
  });
});

describe("toggleScrollbar", () => {
  afterEach(() => {
    document.body.style.overflow = "";
    vi.useRealTimers();
  });

  it("hides the scrollbar when it is visible", () => {
    toggleScrollbar();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores the scrollbar when it is hidden", () => {
    document.body.style.overflow = "hidden";
    toggleScrollbar();
    expect(document.body.style.overflow).toBe("initial");
  });

  it("waits for the delay before hiding the scrollbar", () => {
    vi.useFakeTimers();
    toggleScrollbar(300);
    expect(document.body.style.overflow).toBe("");
    vi.advanceTimersByTime(300);
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores the scrollbar immediately even with a delay", () => {
    document.body.style.overflow = "hidden";
    toggleScrollbar(300);
    expect(document.body.style.overflow).toBe("initial");
  });
});
