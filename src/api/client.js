const API_BASE_URL = import.meta.env.VITE_API_URL || "https://your-backend-api.com";

export const apiClient = {
    get: async (endpoint, retries = 2) => {
        for (let i = 0; i <= retries; i++) {
            try {
                const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    headers: { "Content-Type": "application/json" },
                });
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                return response.json();
            } catch (error) {
                if (i === retries) throw error;
                await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    },
    post: async (endpoint, body, retries = 2) => {
        for (let i = 0; i <= retries; i++) {
            try {
                const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                return response.json();
            } catch (error) {
                if (i === retries) throw error;
                await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    },
};