export function countMonthsOccurrences(dates: Date[]): number[] {
  const monthsCount: number[] = [];

  dates.forEach((date) => {
    const month = date.getMonth();

    if (!monthsCount[month]) {
      monthsCount[month] = 0;
    }

    monthsCount[month] += 1;
  });

  return monthsCount;
}
