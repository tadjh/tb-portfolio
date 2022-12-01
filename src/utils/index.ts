export function composeKey(label: string, index: number) {
  return `${label}-${index + 1}`;
}
