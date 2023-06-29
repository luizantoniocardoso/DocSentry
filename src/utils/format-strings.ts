export function formatTitleCase(string: string) {
  return string
    .toLowerCase()
    .replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

export function formatDate(date: Date | string) {
  const formattedDate = date.toString().substring(0, 10);
  return formattedDate;
}
