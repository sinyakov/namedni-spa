import _ from "lodash";

export const MIN_YEAR = 1931;
export const MAX_YEAR = 2010;
export const HOLE_START = 1941;
export const HOLE_END = 1945;

export const computeYearsInterval = (year: number) => {
  const allYears = _.range(MIN_YEAR, MAX_YEAR + 1).filter(
    y => !(y >= HOLE_START && y <= HOLE_END)
  );

  if (year - MIN_YEAR < 6) {
    return allYears.slice(0, 12);
  }

  if (MAX_YEAR - year < 6) {
    return allYears.slice(-12);
  }

  const yearPosition = allYears.findIndex(y => y === year);

  return allYears.slice(yearPosition - 6 + 1, yearPosition + 6 + 1);
};
