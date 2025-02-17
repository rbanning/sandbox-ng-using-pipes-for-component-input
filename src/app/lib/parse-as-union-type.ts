export function parseAsUnionType<T>(value: unknown, possible: readonly T[]): T | null {
  if (value) {
    const str = typeof(value) === 'string'
      ? value
      : `${value}`;

    return possible.find(v => v === str) ?? null;
  }

  //else
  return null;
}