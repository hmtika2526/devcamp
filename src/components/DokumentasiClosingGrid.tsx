import React from "react";
import Image from "next/image";
import { getCompressedUrl } from "./DokumentasiClosing.utils";

interface DokumentasiClosingGridProps {
  imageUrls: string[];
  activeCDN: string;
  onImageClick: (url: string) => void;
}

export default function DokumentasiClosingGrid({ 
  imageUrls, 
  activeCDN, 
  onImageClick 
}: DokumentasiClosingGridProps) {
  return (
    <div className="columns-2 sm:columns-3 md:columns-4 mt-5 gap-4">
      {imageUrls.map((url, index) => {
        const filename = url.replace(`${activeCDN}/images/devcamp/closing/jpg-compressed/`, "");
        return (
          <div
            key={index}
            className="mb-4 break-inside-avoid bg-gray-700 rounded overflow-hidden cursor-pointer"
            onClick={() => onImageClick(url)}
          >
            <Image
              src={url}
              alt={`Dokumentasi ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              placeholder="blur"
              blurDataURL={url}
            />
          </div>
        );
      })}
    </div>
  );
}