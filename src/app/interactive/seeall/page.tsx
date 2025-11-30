"use client";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("All");

  const posts = [
    {
      id: 1,
      title: "GOD HELP US! — Codename for the Next Demo",
      date: "25 October 2025",
      img: "/assets/interactivedevlog1.png",
    },
    {
      id: 2,
      title: "DEVLOG 16 OCT 2025 Addressing Bugs",
      date: "16 October 2025",
      img: "/assets/interactivedevlog4.png",
    },
    {
      id: 3,
      title: "We are participating STEAM NEXT FEST 2025!",
      date: "13 October 2025",
      img: "/assets/interactivedevlog5.png",
    },
    {
      id: 4,
      title: "The Development Journey Of Ganyang Setan Alas! The Game",
      date: "10 December 2024",
      img: "/assets/interactivedevlog6.png",
    },
    {
      id: 5,
      title: "Delay Announcement of Ganyang Setan Alas! The Game",
      date: "15 August 2024",
      img: "/assets/interactivedevlog7.png",
    },
    {
      id: 6,
      title: "Ganyang Setan Alas! Trailer Release",
      date: "21 July 2025",
      img: "/assets/interactivedevlog8.png",
    },
  ];

  const videos = [
    {
      id: 1,
      img: "/assets/setan_alas1.png",
      title: "Zombi? No. May-t? Yes. – Ganyang Setan Alas! The Game [GAMEPLAY]",
      author: "GreenyZ",
      borderColor: "black",
    },
    {
      id: 2,
      img: "/assets/setan_alas2.jpg",
      title: "[Ganyang Setan Alas! The Game] Ada yang lepas !!?",
      author: "Agatha Seven",
      tag: "AKA Virtual",
      borderColor: "red",
    },
    {
      id: 3,
      img: "/assets/setan_alas3.png",
      title: "Ganyang Setan Alas! – The Game",
      author: "PPID Sekolah Vokasi UGM",
      borderColor: "blue",
    },
  ];

  return (
    <main className="bg-[#252525] text-white min-h-screen pb-20 font-sans">
      <section className="max-w-7xl mx-auto px-4 pt-20 border-b border-white/50 pb-20">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/interactivedevlog1.png"
            alt="Highlight"
            className="w-full h-[210px] sm:h-[350px] md:h-[390px] object-cover"
          />
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-6 lg:gap-32 justify-between items-start">
          <h2 className="mb-2 headline-1">Highlight</h2>

          <div>
            <p className="body-reg">
              GOD HELP US! — Codename for the Next Demo
            </p>
            <p className="mt-1 body-light">
              Lock, load, and step into the haunted forest of Ganyang Setan
              Alas...
            </p>
          </div>

          <button className="shrink-0 text-xs md:text-sm px-3 py-1 italic bg-white text-black transition hover:bg-neutral-300 cursor-pointer button-secondary">
            Read More
          </button>
        </div>
      </section>

      {/* FEATURED VIDEOS SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-20 border-b border-white/50 pb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-16 headline-1">
          Featured Videos
        </h2>

        <div className="flex flex-col lg:flex-row">
          {/* LEFT */}
          <div className="bg-[#5E5E5E] p-6 lg:w-1/3 w-full mb-8 lg:mb-0">
            <img
              src="/assets/interactivedevlog2.png"
              className="w-full h-[200px] object-cover"
            />

            <h3 className="mt-4 headline-3">Ganyang Setan Alas! The Game</h3>

            <div className="flex gap-2 mt-4 flex-wrap text-sm">
              {["Adventure", "Action", "Casual", "3D"].map((t) => (
                <span key={t} className="px-3 py-2 bg-[#737373]">
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm">
              a single-player shooter set in a haunted Indonesian forest...
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:w-2/3 w-full">
            <div className="relative w-full h-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/nvqPEXf74zw"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 mt-20 sm:mt-28 md:mt-40">
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Devlog", "News", "Videos"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`headline-3 transition cursor-pointer ${activeTab === t
                ? "text-white underline"
                : "text-[#ccc] hover:text-white"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT SWITCH */}
      {activeTab === "Videos" ? (
        <>
          {/* VIDEO LIST SECTION */}
          <section className="max-w-6xl mx-auto px-4 mt-12 space-y-10">
            {videos.map((v) => (
              <div
                key={v.id}
                className="flex flex-col md:flex-row bg-[#3A3A3A] gap-4"
              >
                <img
                  src={v.img}
                  className="w-full md:w-1/3 object-cover border-2 border-[#707070]"
                  style={{ border: `1px solid ${v.borderColor}` }}
                />

                <div className="flex flex-col justify-between my-4">
                  <div>
                    <p className="headline-3">{v.title}</p>
                    <p className="body-light vfx-text-subtitle-2">
                      {v.author}{" "}
                      {v.tag && (
                        <span className="underline">[{v.tag}]</span>
                      )}
                    </p>
                  </div>

                  <button className="mt-4 text-sm italic hover:underline w-fit">
                    WATCH HERE →
                  </button>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <>
          {/* ALL LIST SECTION */}
          <section className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#5E5E5E] transition hover:brightness-110 hover:-translate-y-1"
              >
                <img
                  src={post.img}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5 space-y-2">
                  <p className="headline-3">{post.title}</p>
                  <p className="body-light vfx-text-subtitle-2">{post.date}</p>
                  <button className="text-xs mt-2 hover:underline">
                    READ MORE →
                  </button>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {/* pagination dots */}
      <div className="w-full flex justify-center mt-16">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B3B3B3]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B3B3B3]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B3B3B3]" />
        </div>
      </div>
    </main>
  );
}
