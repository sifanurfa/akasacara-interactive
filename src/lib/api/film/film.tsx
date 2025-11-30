import apiClient from "@/lib/apiClient";
import { Film } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const FilmApi = {
  getAll: async (options?: { limit?: number; }) => {
    const res = await apiClient.get("/films?populate=*");

    let data: Film[] = res.data.data.map((item: Film) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return { ...item, image: fullUrl };
    });

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
};
