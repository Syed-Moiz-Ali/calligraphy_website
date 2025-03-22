const cache = new Map();

export const getCachedData = (key) => {
    const cached = cache.get(key);
    if (cached && Date.now() < cached.expiry) return cached.data;
    cache.delete(key);
    return null;
};

export const setCachedData = (key, data, ttl) => {
    cache.set(key, { data, expiry: Date.now() + ttl });
};