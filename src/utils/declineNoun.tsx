export const declineNoun = ([once, few, many]: string[]) => (count: number) => {
  count = count % 100;

  if (count % 10 === 1 && Math.floor(count / 10) !== 11) {
    return once;
  }
  if (
    Math.floor(count / 10) % 10 >= 2 &&
    Math.floor(count / 10) % 10 <= 4 &&
    Math.floor(count / 10) !== 1
  ) {
    return few;
  }

  return many;
};

export const declinePhenomena = declineNoun([
  "феномен",
  "феномена",
  "феноменов",
]);
