"use client";

import React from 'react'
import ServiceCard from '@/components/akasacara/home/ServiceCard';
import PressCard from '@/components/akasacara/home/PressCard';
import WorkCard from '@/components/akasacara/home/WorkCard';
import Image from 'next/image';

const press = [
  {
    id: 1,
    title: "Setan Alas: Film Horor Karya Kolaboratif Sekolah Vokasi UGM",
    category: "Press",
    image: "/assets/setan_alas.png",
    date: "Oct 25, 2025",
  },
  {
    id: 2,
    title: " 'Tengkorak': A brilliant Indonesian science-fiction",
    category: "News",
    image: "/assets/tengkorak.png",
    date: "Oct 16, 2025",
  },
  {
    id: 3,
    title: "Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    category: "Press",
    image: "/assets/darah_nyai_3.png",
    date: "May 13, 2025",
  },
];

const services = [
  {
    category: "Film",
    caption: "Creating movies, encompasing various stages such as",
    image: "/assets/about.jpg",
    details: [
      "Scriptwriting",
      "Casting",
      "Directing",
      "Editing",
      "Visual Effect",
    ]
  },
  {
    category: "Animation",
    caption: "Bringing static images or object to life through movement.",
    image: "/assets/SetanAlas1After.png",
    details: [
      "Scriptwriting",
      "Voice recording",
      "Storyboarding",
      "Illustration",
      "Animate",   
    ]
  },
  {
    category: "Games",
    caption: "Create interactive video game 2d or 3d.",
    image: "/assets/game.png",
    details: [
      "Scriptwriting",
      "Voice recording",
      "Storyboarding",
      "Illustration",
      "Animate",    
    ]
  },
];

const works = [
  {
    id: 1,
    title: "Tengkorak",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Tengkorak adalah cerita tentang manusia yang berhasil menemukan fosil tengkorak. Ketinggian fosil adalah 1,850m dan berusia 170 ribu tahun di Jawa ketika gempa Bantul terjadi pada tahun 2005. Bahkan agama dan ilmuwan bingung dengan temuan ini.",
  },
  {
    id: 2,
    title: "Darah Nyai",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi provident hic culpa impedit voluptate, fugiat reprehenderit numquam dignissimos, ab aliquid optio! Sequi, nulla laborum sit voluptates amet repellat ipsum magni impedit nihil eveniet corrupti! Commodi!",
  },
  {
    id: 3,
    title: "Setan Alas! (The Draft!)",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi provident hic culpa impedit voluptate, fugiat reprehenderit numquam dignissimos, ab aliquid optio! Sequi, nulla laborum sit voluptates amet repellat ipsum magni impedit nihil eveniet corrupti! Commodi!",
  },
  {
    id: 4,
    title: "Hello Ayah",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi provident hic culpa impedit voluptate, fugiat reprehenderit numquam dignissimos, ab aliquid optio! Sequi, nulla laborum sit voluptates amet repellat ipsum magni impedit nihil eveniet corrupti! Commodi!",
  },
  {
    id: 5,
    title: "Nyanyian Pohon Lontar",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi provident hic culpa impedit voluptate, fugiat reprehenderit numquam dignissimos, ab aliquid optio! Sequi, nulla laborum sit voluptates amet repellat ipsum magni impedit nihil eveniet corrupti! Commodi!",
  },
  {
    id: 6,
    title: "HK-75: A Guru",
    detail: "FEATURE FILM & VFX PRODUCTION",
    year: "2018",
    image: "/assets/tengkorak.png",
    caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi provident hic culpa impedit voluptate, fugiat reprehenderit numquam dignissimos, ab aliquid optio! Sequi, nulla laborum sit voluptates amet repellat ipsum magni impedit nihil eveniet corrupti! Commodi!",
  },
];

function AkasacaraHome() {
  return (
    <div className='flex flex-col items-start bg-akasacara'>
        {/* showreel */}
        <div className={`flex flex-col pb-section items-start self-stretch aspect-video`}>
            <video 
            src="/assets/video_vfx.mp4" 
            autoPlay 
            loop 
            muted
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
            />
        </div>

        {/* services */}
        <div className="flex flex-col py-section px-container justify-center items-start gap-section self-stretch">
            <div className="flex flex-col items-start self-stretch">
                <div className="sub-heading-reg vfx-text-title text-center self-stretch">WHAT WE DO !</div>
                <div className="headline-1 text-center self-stretch text-akasacara-yellow">Crafting Visual Journeys</div>
            </div>

            <div className="flex flex-col items-start gap-l self-stretch">
                {services.map((item, index) => (
                  <ServiceCard
                    key={item.category}
                    category={item.category}
                    image={item.image}
                    caption={item.caption}
                    details={item.details}
                    isLast={index === services.length - 1}
                  />
                ))}                
            </div>
        </div>

        {/* announcement */}
        <div className="flex py-section px-container flex-col items-start gap-3xl self-stretch bg-akasacara-yellow">
          <div className="headline-1 aka-text-title self-stretch">OUR <span className="italic">PRESS</span></div>
          <div className="grid grid-cols-3 justify-center items-start gap-6 self-stretch">
            {press.map((item) => (
                <PressCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    date={item.date}
                />
            ))}
          </div>
        </div>

        {/* portofolio list */}
        <div className="flex flex-col p-container justify-center items-start gap-section self-stretch">
          <div className="flex items-end justify-between self-stretch">
            <div className="headline-1 text-akasacara-yellow">OUR <span className="italic">WORKS</span></div>
            <div className="flex justify-end items-center gap-m text-akasacara-yellow">
              <span className="button-main">SEE ALL</span>
              <span className="see-all">&gt;</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-xl self-stretch">
            {works.map((item, index) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                detail={item.detail}
                year={item.year}
                image={item.image}
                caption={item.caption}
                isLast={index === works.length - 1}
              />
            ))}
          </div>
        </div>

        {/* about */}
        <div className="flex flex-col py-section px-container items-start self-stretch group hover:bg-akasacara-yellow transition-all duration-500">
          <div className="flex flex-col items-start gap-xl self-stretch">
            <div className="headline-1 text-akasacara-yellow self-stretch group-hover:text-black">ABOUT  US !</div>
            <div className="flex items-center self-stretch">
              <div className="flex-1 relative aspect-4/3 overflow-hidden">
                <Image
                    src="/assets/about.jpg"
                    alt="Portfolio Image"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="about-caption flex flex-col flex-1 ps-container justify-center items-center gap-l sub-heading-reg vfx-text-subtitle-1 text-justify">
                <p>Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.</p>
                <p>Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AkasacaraHome