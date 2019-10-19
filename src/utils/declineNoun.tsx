export const declineNoun = ([one, two, five]: string[]) => (count: number) => {
  count = Math.abs(count);
  count %= 100;
  if (count >= 5 && count <= 20) {
    return five;
  }
  count %= 10;
  if (count == 1) {
    return one;
  }
  if (count >= 2 && count <= 4) {
    return two;
  }
  return five;
};

export const declinePhenomena = declineNoun([
  'феномен',
  'феномена',
  'феноменов',
]);
