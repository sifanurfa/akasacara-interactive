'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const [openFilm, setOpenFilm] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filmCards = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        title: `Title`,
        subtitle: `Years`,
    }));

    const videoCards = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        title: `Title`,
        subtitle: `Category - Years`,
    }));

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

    const filmProjects = [
        {
            title: "Darah Nyai",
            year: 2018,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Sebuah film drama misteri yang mengangkat kisah warisan keluarga dan rahasia kelam yang kembali muncul setelah bertahun-tahun terlupakan.",
            img: "/assets/checker.png",
        },
        {
            title: "Setan Alas! (The Draft!)",
            year: 2019,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Film horor fantasi yang mengikuti sekelompok ekspedisi hutan yang menemukan makhluk gaib kuno yang selama ini hanya dianggap legenda.",
            img: "/assets/checker.png",
        },
        {
            title: "Hello Ayah",
            year: 2020,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Kisah menyentuh tentang hubungan ayah dan anak yang terpisah oleh keadaan, namun dipersatukan kembali melalui perjalanan tak terduga.",
            img: "/assets/checker.png",
        },
        {
            title: "Tengkorak",
            year: 2018,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Sebuah film sci-fi yang bercerita tentang penemuan tengkorak raksasa berusia ratusan ribu tahun yang mengguncang pandangan dunia.",
            img: "/assets/tengkorak.png",
        },
        {
            title: "Prahara di Balik Layar",
            year: 2021,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Drama thriller yang mengikuti konflik internal para pekerja film ketika ambisi, cinta, dan rahasia mulai terkuak satu per satu.",
            img: "/assets/checker.png",
        },
        {
            title: "Nafas Terakhir",
            year: 2022,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Film survival yang menggambarkan perjuangan hidup seseorang yang terjebak dalam situasi ekstrem di tengah alam liar.",
            img: "/assets/checker.png",
        },
        {
            title: "Gema dari Masa Depan",
            year: 2023,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Science fiction yang menceritakan ilmuwan yang menemukan komunikasi misterius dari masa depan, membawa dampak besar pada dunia.",
            img: "/assets/checker.png",
        },
        {
            title: "Ruang Tanpa Cahaya",
            year: 2017,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Film psychological horror yang mengeksplorasi kegelapan batin manusia melalui sebuah ruangan misterius tanpa sumber cahaya.",
            img: "/assets/checker.png",
        },
        {
            title: "Legenda Gunung Batu",
            year: 2016,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Petualangan fantasi tentang pemuda yang menemukan jalur tersembunyi menuju dunia yang penuh makhluk mitologis dan misteri kuno.",
            img: "/assets/checker.png",
        },
        {
            title: "Senandung di Ujung Malam",
            year: 2020,
            type: "FEATURE FILM & VFX PRODUCTION",
            desc:
                "Romansa bernuansa urban yang mengikuti perjalanan seorang musisi jalanan mencari jati diri dan cinta sejatinya.",
            img: "/assets/checker.png",
        },
    ];

    const videoProjects = [
        {
            title: "Berproses Meraih Sukses",
            year: 2022,
            type: "VIDEO PRODUCTION",
            desc:
                "Video motivasi yang menggambarkan perjalanan seseorang dalam mencapai tujuan melalui kegigihan, kegagalan, dan pembelajaran.",
            img: "/assets/checker.png",
        },
        {
            title: "Proyek Check",
            year: 2021,
            type: "VIDEO PRODUCTION",
            desc:
                "Dokumentasi proyek kerja yang menampilkan proses perencanaan hingga pelaksanaan secara detail dan dinamis.",
            img: "/assets/checker.png",
        },
        {
            title: "PMB Jalur Test CBT UGM",
            year: 2023,
            type: "VIDEO PRODUCTION",
            desc:
                "Video informasi mengenai alur dan prosedur tes CBT UGM, ditujukan untuk membantu calon mahasiswa memahami proses seleksi.",
            img: "/assets/checker.png",
        },
        {
            title: "Company Profile - Mandiri Logistik",
            year: 2020,
            type: "VIDEO PRODUCTION",
            desc:
                "Video profil perusahaan yang menampilkan layanan, visi, dan pencapaian Mandiri Logistik secara profesional.",
            img: "/assets/checker.png",
        },
        {
            title: "Behind The Scene - Film Kampus",
            year: 2019,
            type: "VIDEO PRODUCTION",
            desc:
                "Dokumentasi proses pembuatan film yang menampilkan kegiatan kru serta proses kreatif di balik layar.",
            img: "/assets/checker.png",
        },
        {
            title: "Launching Produk SmartHome",
            year: 2023,
            type: "VIDEO PRODUCTION",
            desc:
                "Video peluncuran produk SmartHome terbaru dengan konsep visual modern dan penjelasan fitur unggulan.",
            img: "/assets/checker.png",
        },
        {
            title: "Video Kampanye Lingkungan",
            year: 2018,
            type: "VIDEO PRODUCTION",
            desc:
                "Kampanye edukatif mengenai pentingnya menjaga kelestarian lingkungan dengan pesan yang kuat dan visual yang menyentuh.",
            img: "/assets/checker.png",
        },
        {
            title: "Tutorial Penggunaan Aplikasi EduTech",
            year: 2021,
            type: "VIDEO PRODUCTION",
            desc:
                "Video panduan penggunaan aplikasi EduTech yang dibuat dengan tampilan sederhana namun informatif.",
            img: "/assets/checker.png",
        },
        {
            title: "Event Highlight - Tech Conference",
            year: 2022,
            type: "VIDEO PRODUCTION",
            desc:
                "Compilation highlight acara konferensi teknologi dengan visual cepat, dinamis, dan menarik.",
            img: "/assets/checker.png",
        },
        {
            title: "Video Sosial - Ayo Donor Darah",
            year: 2019,
            type: "VIDEO PRODUCTION",
            desc:
                "Video ajakan donor darah yang dikemas dengan pesan humanis dan visual yang menyentuh hati.",
            img: "/assets/checker.png",
        },
    ];

    const variants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.5 },
        },
        collapsed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.4 },
        },
    };

    const hoverVariants = {
        initial: { width: "100%" },
        hover: {
            width: "100%",
            scale: 1.03,
            transition: { duration: 0.3 },
        },
    };

    return (
        <main className="min-h-screen bg-black text-white pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
                <section className="bg-black p-4 sm:p-6 space-y-24 sm:space-y-32">

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

                    {/* Film Projects */}
                    <div>
                        <h3 className="text-[#F4BB26] font-semibold mb-12 sm:mb-16 headline-2 text-2xl sm:text-3xl">
                            Film Projects
                        </h3>

                        {/* Grid (hilang jika openFilm = true) */}
                        {!openFilm && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                                {filmCards.map((c) => (
                                    <div key={c.id}>
                                        <div className="w-full aspect-[3/4]">
                                            <img src="/assets/checker.png" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className="headline-3">{c.title}</p>
                                            <p className="body-reg">{c.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Animated List */}
                        <AnimatePresence>
                            {openFilm && (
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={variants}
                                    className="space-y-10 overflow-hidden"
                                >
                                    {filmProjects.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            className="border-b border-[#7F7F7F] pb-10 cursor-pointer"
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            onHoverStart={() => setHovered(i)}
                                            onHoverEnd={() => setHovered(null)}
                                        >
                                            <AnimatePresence mode="wait">
                                                {/* === NORMAL STATE (NOT HOVERED) === */}
                                                {hovered !== i && (
                                                    <motion.div
                                                        key="title"
                                                        initial={{ opacity: 1 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="text-2xl font-semibold mb-4"
                                                    >
                                                        {p.title}
                                                    </motion.div>
                                                )}

                                                {/* === HOVER STATE (EXPANDED LAYOUT) === */}
                                                {hovered === i && (
                                                    <motion.div
                                                        key="details"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center py-6 mx-10"
                                                    >
                                                        {/* LEFT — TITLE AREA */}
                                                        <div className="text-left space-y-2">
                                                            <h2 className="text-[#F4BB26] text-4xl md:text-5xl font-bold leading-tight">
                                                                {p.title}
                                                            </h2>

                                                            <div className="text-white tracking-wider text-sm md:text-base uppercase">
                                                                {p.type} - {p.year}
                                                            </div>
                                                        </div>

                                                        {/* CENTER — IMAGE */}
                                                        <div className="flex justify-center">
                                                            <img
                                                                src={p.img}
                                                                alt={p.title}
                                                                className="w-full h-auto object-cover"
                                                            />
                                                        </div>

                                                        {/* RIGHT — DESCRIPTION */}
                                                        <p className="text-white leading-relaxed text-sm md:text-base w-full">
                                                            {p.desc}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Button */}
                        <div className="flex justify-center mt-14 sm:mt-20">
                            <button
                                onClick={() => setOpenFilm(!openFilm)}
                                className="text-[#F4BB26] italic text-xl sm:text-2xl font-bold cursor-pointer"
                            >
                                {openFilm ? "BACK" : "SEE ALL"}
                            </button>
                        </div>
                    </div>

                    {/* Video Projects */}
                    <div>
                        <h3 className="text-[#F4BB26] font-semibold mb-12 sm:mb-16 headline-2 text-2xl sm:text-3xl">
                            Video / Ads Project
                        </h3>

                        {!openVideo && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {videoCards.map((c) => (
                                    <div key={c.id}>
                                        <div className="w-full aspect-[3/4]">
                                            <img src="/assets/checker.png" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className="headline-3">{c.title}</p>
                                            <p className="body-reg">{c.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Animated List */}
                        <AnimatePresence>
                            {openVideo && (
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={variants}
                                    className="space-y-10 overflow-hidden"
                                >
                                    {videoProjects.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            className="border-b border-[#7F7F7F] pb-10 cursor-pointer"
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            onHoverStart={() => setHovered(i + 100)}
                                            onHoverEnd={() => setHovered(null)}
                                        >
                                            <AnimatePresence mode="wait">
                                                {/* === NORMAL (NOT HOVERED) === */}
                                                {hovered !== i + 100 && (
                                                    <motion.div
                                                        key="video-title"
                                                        initial={{ opacity: 1 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="text-2xl font-semibold mb-4"
                                                    >
                                                        {p.title}
                                                    </motion.div>
                                                )}

                                                {/* === HOVER STATE (EXPANDED LAYOUT) === */}
                                                {hovered === i + 100 && (
                                                    <motion.div
                                                        key="video-details"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center py-6 mx-10"
                                                    >
                                                        {/* LEFT — TITLE AREA */}
                                                        <div className="text-left space-y-2">
                                                            <h2 className="text-[#F4BB26] text-4xl md:text-5xl font-bold leading-tight">
                                                                {p.title}
                                                            </h2>

                                                            <div className="text-white tracking-wider text-sm md:text-base uppercase">
                                                                {p.type} - {p.year}
                                                            </div>
                                                        </div>

                                                        {/* CENTER — IMAGE */}
                                                        <div className="flex justify-center">
                                                            <img
                                                                src={p.img}
                                                                alt={p.title}
                                                                className="w-full h-auto object-cover"
                                                            />
                                                        </div>

                                                        {/* RIGHT — DESCRIPTION */}
                                                        <p className="text-white leading-relaxed text-sm md:text-base w-full">
                                                            {p.desc}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-center mt-14 sm:mt-20">
                            <button
                                onClick={() => setOpenVideo(!openVideo)}
                                className="text-[#F4BB26] italic text-xl sm:text-2xl font-bold cursor-pointer"
                            >
                                {openVideo ? "BACK" : "SEE ALL"}
                            </button>
                        </div>
                    </div>

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
