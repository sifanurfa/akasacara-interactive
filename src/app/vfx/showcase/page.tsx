"use client";

import { useState, useEffect } from "react";
import "./Showcase.css"
import ContentCard from '@/components/vfx/showcase/ContentCard';
import LatestBreakdown from './LatestBreakdownSection';
import Breakdown from '@/components/vfx/showcase/Breakdown';
import { VFXApi } from "@/lib/api";
import { VFX } from "@/types/api/types";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function VFXShowcase() {
  const [VFX, setVFX] = useState<VFX[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await VFXApi.getAll();
          setVFX(data);
        } catch (err) {
          console.error("Failed to fetch works:", err);
        }
      };
      fetchData();
  }, []);

  return (
    <>
    <div className="flex flex-col items-center gap-[26px] bg-vfx">
        <div className="flex py-section px-container justify-center items-center self-stretch">
            <div className={`flex-1 vfx-text-title text-center tagline`}>How is <span className="cinematic">cinematic illusion</span> crafted through <span className="cinematic">light and layers</span> ?</div>
        </div>

        {/* slider */}
        <div className="flex pb-section justify-center items-center gap-4xl self-stretch overflow-hidden">
            <LatestBreakdown/>
        </div>

        <div className="flex px-container pt-section justify-between items-center self-stretch">
            <div className="headline-1 vfx-text-title">Breakdown Series</div>
        </div>

        {/* interactice breakdown */}
        <Breakdown/>

        {/* list content */}
        <div className="flex py-section px-container flex-col items-start gap-2xl self-stretch">
            <div className="grid grid-cols-2 gap-2xl items-start self-stretch">
                {VFX.map((item) => (
                    <ContentCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        image={`${baseURL?.replace(
                          "/api",
                          ""
                        )}${item.media?.[0]?.url.replace("/api/", "/")}`}
                        setTrailerUrl={setTrailerUrl}
                    />
                ))}
            </div>
        </div>
    </div>

    {/* modal buka youtube embed */}
    <Dialog open={!!trailerUrl} onOpenChange={() => setTrailerUrl(null)}>
        <DialogOverlay className="bg-black/70 backdrop-blur-sm" />
        <DialogContent className="w-full h-[90vh] justify-center bg-transparent border-none shadow-none">
          <VisuallyHidden>
            <DialogTitle>Trailer Video</DialogTitle>
          </VisuallyHidden>
          {trailerUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={trailerUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default VFXShowcase