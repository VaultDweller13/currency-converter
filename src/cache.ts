const cache = new Map<string, unknown>();

function cacheData(key: string, data: unknown) {
  cache.set(key, data);
  console.log(cache);
}

export { cache, cacheData };
