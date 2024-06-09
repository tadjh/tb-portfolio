export function composeKey(label: string, index: number) {
  return `${label}-${index + 1}`;
}

export function isVideo(path: string) {
  return /\.(mp4|webm)$/i.test(path);
}

export function isImage(path: string) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
}

export function toggleScrollbar() {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "initial";
  } else {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 1000);
  }
}
