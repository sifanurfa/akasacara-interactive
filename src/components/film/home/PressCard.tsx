import React from 'react'
import Image from 'next/image';
import "./FilmHome.css"

type PressCardProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
};

function PressCard({ id, title, category, image, date }: PressCardProps) {
  return (
    <div className="flex flex-col items-start group">
        <div className="flex-1 w-full relative aspect-video overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="flex flex-col pt-m pb-l pe-4 items-center gap-m self-stretch">
            <div className="self-stretch">
                <span className="press-category aka-text-title">{category}</span>
                <span className="aka-text-subtitle-1 body-reg"> / {date}</span>
            </div>
            <div className="self-stretch">
                <div className="garis h-px"></div>
            </div>
            <div className="press-title aka-text-title self-stretch">{title}</div>
        </div>
    </div>
  )
}

export default PressCard