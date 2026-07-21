import { fetcher } from "@/lib/fetcher";

const API_BASE = "https://api.celoht.com";

export const api = {
  async get(path: string) {
    return fetcher(`${API_BASE}${path}`);
  },

  async post(path: string, body: Record<string, any>) {
    return fetcher(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  }
};
