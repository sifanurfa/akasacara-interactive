"use client";
import { OurWorkVFX } from "@/types/api/ourwork";
import React, { useEffect, useState } from "react";
import { OurWorkVFXApi } from "@/lib/api";

// const projects = [
//   { title: "Gowok", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "Darah Nyai", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "Berproses Meraih Sukses ", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "Serigala Langit", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "KLHK", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "Tour DTEDI", year: 2020, img: "https://placehold.co/377x565" },
//   { title: "Tengkorak", year: 2020, img: "https://placehold.co/377x565" },
// ];

export default function PortofolioList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [projects, setProjects] = useState<OurWorkVFX[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await OurWorkVFXApi.getOurWork();
          setProjects(data);
        } catch (err) {
          console.error("Failed to fetch works:", err);
        }
      };
      fetchData();
    }, []);

  const getImageUrl = (mediaArray?: any[]) => {
    if (!mediaArray || mediaArray.length === 0) {
      return "https://placehold.co/377x565?text=No+Image"; // fallback
    }

    const url = mediaArray[0].url;

    // Kalau sudah full URL (http/https), langsung pakai
    if (url.startsWith("http")) return url;

    // Kalau dari backend lokal (Strapi, Directus, dll)
    return `${baseURL?.replace("/api", "")}${url.startsWith("/api") ? url.replace("/api", "") : url}`;
  };

  return (
    <div className="relative flex flex-row py-section px-container justify-between items-start gap-xl bg-vfx">
      {/* Bagian kiri: daftar project */}
      <div className="flex flex-col gap-xl">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group flex justify-start items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-center items-start ">
              <div className="flex flex-col items-start gap-2.5 vfx-text-subtitle-2 headline-2 group-hover:text-white! transition-colors duration-300 ">
                {p.title}
              </div>
            </div>
            <div className="flex vfx-text-subtitle-2 sub-heading-reg  group-hover:text-white! transition-colors duration-300">
              {p.year}
            </div>
          </div>
        ))}
      </div>

      {/* Bagian kanan: preview gambar */}
      <div className="w-full max-w-[412px] aspect-[377/530] flex justify-center items-center self-stretch object-cover">
        {hovered !== null && projects[hovered] && (
          <img
            src={getImageUrl(projects[hovered].media)}
            alt={projects[hovered].title}
            width={377}
            height={530}
            className="rounded-xl shadow-lg transition-all duration-500 opacity-100 scale-100 self-stretch object-cover"
          />
        )}
      </div>
    </div>
  );
};
