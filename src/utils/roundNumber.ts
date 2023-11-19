// rounding decimal number to specific point of fractional part
export default function roundNumber(n: number, d: number) {
  const numberToMultAndDiv = Math.pow(10, d);
  return Math.round(n * numberToMultAndDiv) / numberToMultAndDiv;
}
