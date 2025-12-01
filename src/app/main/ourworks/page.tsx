'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilmCard } from "@/components/film/ourworks/FilmProjectCard";
import { VideoCard } from "@/components/film/ourworks/VideoProjectCard";
import { FilmApi } from "@/lib/api";
import { Film } from "@/types/api/types";
import { VideoApi } from "@/lib/api";
import { Video } from "@/types/api/types";
import Link from 'next/link';

export default function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [film, setFilm] = useState<Film[]>([]);
    const [video, setVideo] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FilmApi.getAll({ limit:8 });
            setFilm(data);
          } catch (err) {
            console.error("Failed to fetch works:", err);
          }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await VideoApi.getAll({ limit:8 });
            setVideo(data);
          } catch (err) {
            console.error("Failed to fetch works:", err);
          }
        };
        fetchData();
    }, []);

    const allProjects: {
        title: string;
        year?: string;
        image: string;
    }[] = [
            { title: "Gowok", year: "2020", image: "/assets/checker.png" },
            { title: "Darah Nyai", year: "2020", image: "/assets/darah_nyai.png" },
            { title: "Serigala Langit", year: "2020", image: "/assets/serigala_langit.png" },
            { title: "Berproses Menuju Sukses", year: "2020", image: "/assets/checker.png" },
            { title: "KLHK", year: "2020", image: "/assets/checker.png" },
            { title: "Tour Tedi", year: "2020", image: "/assets/checker.png" },
            { title: "Tengkorak", year: "2020", image: "/assets/tengkorak.png" },
        ];

    return (
        <main className="flex flex-col items-start bg-akasacara">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
                <section className="p-4 sm:p-6 space-y-24 sm:space-y-32">
                    {/* Awarded Films */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <h2 className="text-[#F4BB26] font-semibold lg:w-[40%] text-center lg:text-right headline-1 text-3xl sm:text-4xl lg:text-5xl">
                            Awarded Films
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-2 items-start w-full lg:w-[60%]">
                            <div className="sm:w-1/2 w-full">
                                <img
                                    src="/assets/checker.png"
                                    alt="award large"
                                    className="w-full h-[18rem] sm:h-[24rem] object-cover"
                                />
                            </div>

                            <div className="sm:w-1/2 flex flex-col gap-2">
                                <img
                                    src="/assets/checker.png"
                                    alt="award top"
                                    className="w-full h-[10rem] sm:h-[11.7rem] object-cover"
                                />
                                <img
                                    src="/assets/checker.png"
                                    alt="award bottom"
                                    className="w-full h-[10rem] sm:h-[11.7rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section> 
            </div>

            {/* Film Projects */}
            <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
                <div className="headline-1 text-akasacara-yellow self-stretch">Film Projects</div>
                <div className="flex flex-col items-start gap-l self-stretch">
                    <div className="grid grid-cols-4 content-start gap-l self-stretch">
                        {film.map((item) => (
                            <FilmCard
                                key={item.id}
                                title={item.title}
                                year={item.year}
                                image={item.image}                                    
                            />
                        ))}
                    </div>
                </div>
                <Link href="/main/ourworks/film" className="button-main text-akasacara-yellow text-center self-stretch">SEE ALL</Link>
            </div>

            {/* Video / Ads Projects */}
            <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
                <div className="headline-1 text-akasacara-yellow self-stretch">Video / Ads Projects</div>
                <div className="flex flex-col items-start gap-l self-stretch">
                    <div className="grid grid-cols-4 content-start gap-l self-stretch">
                        {video.map((item) => (
                            <VideoCard
                                key={item.id}
                                title={item.title}
                                year={item.year}
                                image={item.image}                                    
                                type={item.type}                                    
                            />
                        ))}
                    </div>
                </div>
                <Link href="/main/ourworks/video" className="button-main text-akasacara-yellow text-center self-stretch">SEE ALL</Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
                <section className="bg-black p-4 sm:p-6 space-y-24 sm:space-y-32">
                    {/* ALL PROJECTS */}
                    <div className="relative mb-8">
                        <h3 className="text-[#F4BB26] mb-12 sm:mb-16 text-center text-3xl sm:text-5xl font-semibold">
                            All Projects
                        </h3>

                        {/* Poster kanan yang berubah sesuai hover */}
                        <div className="hidden lg:block absolute top-24 right-20 w-[16rem]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={hoveredProject !== null ? hoveredProject : activeIndex}
                                    src={
                                        hoveredProject !== null
                                            ? allProjects[hoveredProject].image
                                            : allProjects[activeIndex || 0].image
                                    }
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25 }}
                                    alt="project preview"
                                    className="w-full h-[18rem] object-cover rounded"
                                />
                            </AnimatePresence>
                        </div>

                        {/* List Titles */}
                        <div className="flex flex-col items-center justify-center mt-12 sm:mt-20">
                            <ul className="space-y-6 sm:space-y-8 text-center">
                                {allProjects.map((p, idx) => {
                                    const isActive = activeIndex === idx;
                                    return (
                                        <li
                                            key={p.title + idx}
                                            onClick={() => setActiveIndex(idx)}
                                            onMouseEnter={() => setHoveredProject(idx)}
                                            onMouseLeave={() => setHoveredProject(null)}
                                            className={`flex items-center justify-center cursor-pointer transition duration-300 ease-in-out ${isActive
                                                ? "text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                                : "text-[#FFFFFF]/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                                }`}
                                        >
                                            <span className="headline-2 text-lg sm:text-2xl lg:text-3xl">
                                                {p.title}
                                            </span>
                                            <span
                                                className={`body-reg ml-2 text-sm sm:text-base transition ${isActive ? "text-[#FFFFFF]/80" : "text-[#FFFFFF]/60"
                                                    }`}
                                            >
                                                {p.year}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
