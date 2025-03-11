export function composeKey(label: string, index: number) {
  return `${label}-${index + 1}`;
}

export function isVideo(path: string) {
  return /\.(mp4|webm)$/i.test(path);
}

export function isImage(path: string) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
}

export function isIFrame(path: string) {
  return /\.(iframe)$/i.test(path);
}

export function toggleScrollbar(delay = 0) {
  if (document.body.style.overflow === "hidden") {
    return (document.body.style.overflow = "initial");
  }

  if (delay) {
    return setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, delay);
  }

  return (document.body.style.overflow = "hidden");
}
