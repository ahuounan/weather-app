const set = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
  return window.localStorage.getItem(key);
};

const remove = (key: string) => {
  return window.localStorage.removeItem(key);
};

export const storage = { remove, set, get };
