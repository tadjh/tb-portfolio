export function composeKey(label: string, index: number) {
  return `${label}-${index + 1}`;
}

export function isVideo(path: string) {
  return /\.(mp4|webm)$/i.test(path);
}

export function isImage(path: string) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
}
