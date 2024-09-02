export function objectHasKey<T extends object>(obj: T, key: PropertyKey): key is keyof T {
  return obj.hasOwnProperty(key);
}
