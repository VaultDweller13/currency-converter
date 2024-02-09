const cache = new Map<string, string>();

function cacheData(key: string, data: unknown) {
  const serializedData = JSON.stringify(data);
  cache.set(key, serializedData);
}

function getCachedData(key: string) {
  const data = cache.get(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export { getCachedData, cacheData };
