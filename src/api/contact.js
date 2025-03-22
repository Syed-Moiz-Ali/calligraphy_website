import { apiClient } from "./client.js";

export const submitContactForm = async (formData) => {
    return await apiClient.post("/contact", formData);
};