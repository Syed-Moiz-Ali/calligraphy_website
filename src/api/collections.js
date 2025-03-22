import { apiClient } from "./client.js";
import { getCachedData, setCachedData } from "../utils/cache.js";

export const getCollections = async (params = {}) => {
    const { type = "popular", filters = {}, page = 1, limit = 12 } = params;
    const cacheKey = `collections_${type}_${JSON.stringify(filters)}_${page}`;
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    const body = { type, filters, pagination: { page, limit } };
    const data = await apiClient.post("/collections", body);
    setCachedData(cacheKey, data, 15 * 60 * 1000); // Cache for 15 mins
    return data; // Expected: { items: [], total: number }
};

export const getCollectionDetail = async (id) => {
    const cacheKey = `collection_${id}`;
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    const data = await apiClient.get(`/collections/${id}`);
    setCachedData(cacheKey, data, 15 * 60 * 1000);
    return data;
};