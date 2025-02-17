export function parseAsInt(value: unknown): number | null {
  const num = parseAsInt(value);
  return Number.isInteger(num)
    ? num
    : null;
}