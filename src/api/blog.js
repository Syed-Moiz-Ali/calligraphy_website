import { apiClient } from "./client.js";
import { getCachedData, setCachedData } from "../utils/cache.js";

export const getBlogPosts = async () => {
    const cacheKey = "blog_posts";
    const cached = getCachedData(cacheKey);
    if (cached) return cached;

    const data = await apiClient.get("/blog");
    setCachedData(cacheKey, data, 24 * 60 * 60 * 1000); // Cache for 24 hours
    return data;
};