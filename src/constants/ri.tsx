export type IRuler =
  | "alexander-i"
  | "alexander-ii"
  | "alexander-iii"
  | "bez-petra"
  | "ekaterina-ii"
  | "nikolay-i"
  | "nikolay-ii"
  | "pavel-i"
  | "petr-i";

export const rulers: { [key in IRuler]: string } = {
  "alexander-i": "Алексаендр I",
  "alexander-ii": "Алексаендр I",
  "alexander-iii": "Алексаендр III",
  "bez-petra": "Без Петра",
  "ekaterina-ii": "Екатерина II",
  "nikolay-i": "Николай I",
  "nikolay-ii": "Николай II",
  "pavel-i": "Павел I",
  "petr-i": "Петр I",
};
