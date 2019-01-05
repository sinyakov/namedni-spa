import {
  HOLE_END,
  HOLE_START,
  MAX_YEAR,
  MIN_YEAR,
} from "./computeYearsInterval";

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
