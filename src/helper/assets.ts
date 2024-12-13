export const img = (uri: string) => (
  new URL(`../img/${uri}`, import.meta.url).href
);
