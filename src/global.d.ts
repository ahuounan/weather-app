declare module '*.png';

interface ObjectConstructor {
  keys<T>(o: T): Array<keyof T>;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    OPEN_WEATHER_API_KEY: string;
    OPEN_CAGE_API_KEY: string;
    UNSPLASH_API_KEY: string;
  }
}
