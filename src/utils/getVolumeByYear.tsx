export const getVolumeByYear = (year: number) => {
  if (year >= 1931 && year <= 1940) {
    return "1931-1940";
  }
  if (year >= 1946 && year <= 1960) {
    return "1946-1960";
  }
  if (year >= 1961 && year <= 1970) {
    return "1961-1970";
  }
  if (year >= 1971 && year <= 1980) {
    return "1971-1980";
  }
  if (year >= 1981 && year <= 1990) {
    return "1981-1990";
  }
  if (year >= 1991 && year <= 2000) {
    return "1991-2000";
  }
  if (year >= 2001 && year <= 2005) {
    return "2001-2005";
  }
  if (year >= 2006 && year <= 2010) {
    return "2006-2010";
  }
};
