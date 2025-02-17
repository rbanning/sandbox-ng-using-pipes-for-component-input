export function isUnionType<T>(obj: unknown, unionOptions: readonly T[]): obj is T {
  return (typeof(obj) === 'string')
      && (unionOptions.includes(obj as T));
}

