declare module '*.png';

interface ObjectConstructor {
  keys<T>(o: T): Array<keyof T>;
}
