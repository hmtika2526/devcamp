import React from "react";
import Image from "next/image";
import { getDownloadUrl } from "./DokumentasiClosing.utils";

interface DokumentasiClosingModalProps {
  selectedImage: string | null;
  selectedFilename: string | null;
  activeCDN: string;
  onClose: () => void;
}

const MIRROR_BUTTONS = [
  {
    href: "https://drive.google.com/drive/folders/1hs5hWJ-tFRq1ieHnfEQy_NAmaN-W5zm9?usp=drive_link",
    label: "GDrive",
    className: "bg-white text-black px-4 py-2 rounded shadow"
  },
  {
    href: "https://github.com/hmtika2425/cdn.hmtika.web.id/tree/main/images/devcamp/closing",
    label: "Github",
    className: "bg-[#0d1117] text-white px-4 py-2 rounded shadow"
  }
];

export default function DokumentasiClosingModal({
  selectedImage,
  selectedFilename,
  activeCDN,
  onClose
}: DokumentasiClosingModalProps) {
  if (!selectedImage || !selectedFilename) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full px-4 rounded-xl animate-[scaleIn_0.4s_ease-out_forwards]">
        <Image
          src={selectedImage}
          alt="Dokumentasi"
          width={400}
          height={300}
          className="w-full h-auto md:h-full md:w-auto mx-auto object-contain"
          placeholder="blur"
          blurDataURL={selectedImage}
        />

        {/* Action buttons */}
        <div className="flex justify-center flex-wrap max-w-full gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
          >
            Close
          </button>
          <a
            href={getDownloadUrl(selectedFilename, activeCDN)}
            download
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Download
          </a>
          {MIRROR_BUTTONS.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={button.className}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}