import { SHORT_CUT_CURRENCY } from './variable';
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('vi-VN').format(number);
};
export const kFormatter = (num) => {
  if ([undefined, null, ""].includes(num)) {
    return;
  }
  if (Math.abs(num) > SHORT_CUT_CURRENCY.Bilion.limit) {
    return (
      (
        Math.sign(num) *
          (Math.abs(num) / SHORT_CUT_CURRENCY.Bilion.k).toFixed(6) +
        ""
      ).substring(5, "") + "B"
    );
  }
  if (Math.abs(num) > SHORT_CUT_CURRENCY.Milion.limit) {
    return (
      Math.sign(num) *
        (Math.abs(num) / SHORT_CUT_CURRENCY.Milion.k).toFixed(2) +
      "M"
    );
  }
  if (Math.abs(num) > SHORT_CUT_CURRENCY.Thousand.limit) {
    return (
      Math.sign(num) *
        (Math.abs(num) / 1_000).toFixed(1) +
      "K"
    );
  }
  return Math.sign(num) * Math.abs(num);
};
export function textAbstract(text: string | any, length: number | any) { // turn string into ... with length condition
  if (text == null) {
    return "";
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  const last = text.lastIndexOf(" ");
  text = text.substring(0, last);
  return text + "..."
}