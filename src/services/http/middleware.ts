export const authRequestMiddleware = (driver: typeof fetch) => {
  const authHeaders = {
    'Content-Type': 'application/json'
  };
  return (url: string, config: RequestInit) =>
    driver(url, { ...config, headers: { ...config.headers, ...authHeaders } });
};
