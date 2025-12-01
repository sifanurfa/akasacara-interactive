"use client";

import React, { useEffect, useState } from "react";
import WorkCard from '@/components/film/home/WorkCard';
import { VideoApi } from "@/lib/api";
import { Video } from "@/types/api/types";

function VideoProjects() {
  const [video, setVideo] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await VideoApi.getAll();
        setVideo(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-start bg-akasacara'>
        <div className="flex flex-col p-container justify-center items-start gap-section self-stretch">
          <div className="flex items-end justify-between self-stretch">
            <div className="headline-1 text-akasacara-yellow">Video / Ads PROJECTS</div>
          </div>
          
          <div className="flex flex-col items-start gap-xl self-stretch">
            {video.map((item, index) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                year={item.year}
                image={item.image}
                description={item.description}
                type={item.type}
                isLast={index === video.length - 1}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default VideoProjects