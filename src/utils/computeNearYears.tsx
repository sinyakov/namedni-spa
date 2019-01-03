const MIN_YEAR = 1931;
const MAX_YEAR = 2010;
const HOLE_START = 1941;
const HOLE_END = 1945;

const computePrevYear = (year: number) => {
  if (year === MIN_YEAR) {
    return null;
  }
  if (year === HOLE_END + 1) {
    return HOLE_START - 1;
  }
  return year - 1;
};

const computeNextYear = (year: number) => {
  if (year === MAX_YEAR) {
    return null;
  }
  if (year === HOLE_START - 1) {
    return HOLE_END + 1;
  }
  return year + 1;
};

export const computeNearYears = (year: number) => ({
  nextYear: computeNextYear(year),
  prevYear: computePrevYear(year),
});
