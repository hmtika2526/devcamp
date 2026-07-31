import React from "react";
import ScrollFloat from "@/utils/ScrollFloat";

const MIRRORS = [
  {
    href: "https://drive.google.com/drive/folders/1jMasHoDuGajSOJW_6khkvFxcO9sHnIsn?usp=sharing",
    label: "Mirror 1 : PNG",
    gradient: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/30"
  },
  {
    href: "https://drive.google.com/file/d/1OA3rPrIKjhTugt9POw0HO1_pFwOdaOca/view?usp=sharing",
    label: "Mirror 2 : Semua [PDF]",
    gradient: "from-green-500 to-green-700",
    shadow: "shadow-green-500/30"
  },
  {
    href: "https://github.com/hmtika2425/cdn.hmtika.web.id/tree/main/images/devcamp/sertifikat",
    label: "Mirror 3 : GitHub Repository",
    gradient: "from-purple-500 to-purple-700",
    shadow: "shadow-purple-500/30"
  }
];

export default function SertifikatHeader() {
  return (
    <>
      <ScrollFloat
        containerClassName="text-center text-[#ffffff] font-orbitron font-extrabold text-3xl"
        animationDuration={1}
        stagger={0.03}
        ease="back.inOut(2)"
      >
        SERTIFIKAT
      </ScrollFloat>

      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        {MIRRORS.map((mirror, index) => (
          <a
            key={index}
            href={mirror.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${mirror.gradient} text-white font-semibold shadow-md hover:${mirror.shadow} hover:scale-105 transition`}
          >
            {mirror.label}
          </a>
        ))}
      </div>
    </>
  );
}