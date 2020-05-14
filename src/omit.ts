export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function omit(obj: object, fields: string[]): object {
  const shallowCopy = { ...obj };
  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];
    delete shallowCopy[field];
  }
  return shallowCopy;
}
