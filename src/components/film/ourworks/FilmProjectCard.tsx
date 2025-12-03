import React from 'react'
import Image from 'next/image';

type WorkCardProps = {
  title: string;
  year?: number | null;
  image: string;
};

export function FilmCard({ title, year, image }: WorkCardProps) {
    return (
        <div className="flex flex-col items-center gap-m">
            {/* gambar */}
            <div className="relative self-stretch aspect-288/383">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col items-center gap-xs self-stretch">
                <div className="headline-3 text-white text-center self-stretch">{title}</div>
                <div className="body-light text-white">{year}</div>
            </div>
        </div>
    )
}