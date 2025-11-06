
import React from 'react';

export default function Page() {
  const posts = [
    { id: 1, title: 'GOD HELP US! — Codename for the Next Demo', date: '25 October 2025', img: '/assets/interactivedevlog1.png' },
    { id: 2, title: 'DEVLOG 16 OCT 2025 Addressing Bugs', date: '16 October 2025', img: '/assets/interactivedevlog4.png' },
    { id: 3, title: 'We are participating STEAM NEXT FEST 2025!', date: '13 October 2025', img: '/assets/interactivedevlog5.png' },
    { id: 4, title: 'The Development Journey Of Ganyang Setan Alas! The Game', date: '10 December 2024', img: '/assets/interactivedevlog6.png' },
    { id: 5, title: 'Delay Announcement of Ganyang Setan Alas! The Game', date: '15 August 2024', img: '/assets/interactivedevlog7.png' },
    { id: 6, title: 'Ganyang Setan Alas! Trailer Release', date: '21 July 2025', img: '/assets/interactivedevlog8.png' },
  ];

  return (
    <main className="bg-[#252525] text-white min-h-screen pb-20 font-sans">

      {/* HIGHLIGHT */}
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
            <p className="body-reg">GOD HELP US! — Codename for the Next Demo</p>
            <p className="mt-1 body-light">
              Lock, load, and step into the haunted forest of Ganyang Setan Alas. Players will face waves of undead enemies in this intense action-horror shooter.
            </p>
          </div>

          <button className="shrink-0 text-xs md:text-sm px-3 py-1 italic bg-white text-black transition hover:bg-neutral-300 cursor-pointer button-secondary">
            Read More
          </button>
        </div>
      </section>

      {/* FEATURED VIDEOS */}
      <section className="max-w-7xl mx-auto px-4 mt-20 border-b border-white/50 pb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-16 headline-1">Featured Videos</h2>

        <div className="flex flex-col lg:flex-row">

          {/* LEFT SIDE */}
          <div className="bg-[#5E5E5E] p-6 lg:w-1/3 w-full mb-8 lg:mb-0">
            <img
              src="/assets/interactivedevlog2.png"
              alt="thumbnail"
              className="w-full h-[200px] lg:h-[220px] object-cover"
            />

            <h3 className="mt-4 headline-3">
              Ganyang Setan Alas! The Game
            </h3>

            <div className="flex gap-2 mt-4 flex-wrap text-sm">
              {["Adventure","Action","Casual","3D"].map((t) => (
                <span key={t} className="px-3 py-2 bg-[#737373]">{t}</span>
              ))}
            </div>

            <p className="mt-4 text-sm">
              a single-player shooter set in a haunted Indonesian forest, where four students, armed with a range of weapons, ...
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:w-2/3 w-full">
            <div className="relative w-full h-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/oBp6w5n_rBI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 mt-20 sm:mt-28 md:mt-40">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="text-white headline-3 transition hover:opacity-80 cursor-pointer">
            All
          </button>
          <button className="headline-3 text-[#ccc] transition hover:text-white hover:opacity-80 cursor-pointer">
            Devlog
          </button>
          <button className="headline-3 text-[#ccc] transition hover:text-white hover:opacity-80 cursor-pointer">
            News
          </button>
          <button className="headline-3 text-[#ccc] transition hover:text-white hover:opacity-80 cursor-pointer">
            Videos
          </button>
        </div>
      </section>

      {/* GRID POST */}
      <section className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#5E5E5E] transition hover:brightness-110 hover:-translate-y-1"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />

            <div className="p-5 space-y-2">
              <p className="headline-3">{post.title}</p>
              <p className="body-light">{post.date}</p>

              <button className="inline-flex items-center gap-1 text-xs mt-2 hover:underline cursor-pointer button-secondary">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </section>

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