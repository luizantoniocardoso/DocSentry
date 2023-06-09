export function formatTitleCase(string: string) {
  return string
    .toLowerCase()
    .replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}
