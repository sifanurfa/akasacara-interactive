// lib/api/devlogApi.ts
import apiClient from "@/lib/apiClient";
import { OurWorkVFX } from "@/types/api/ourwork";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const OurWorkVFXApi = {
  getOurWork: async () => {
    const res = await apiClient.get("/vfx-display?populate=*");

    return res.data.data.map((item: OurWorkVFX) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;
      return { ...item, image: fullUrl };
    });
  },
};
