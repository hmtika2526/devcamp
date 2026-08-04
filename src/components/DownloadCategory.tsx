import React from "react";
import Link from "next/link";
import DownloadItem from "./DownloadItem";
import { getItemsByCategory } from "./Download.utils";

interface DownloadCategoryProps {
  category: string;
  isOpen: boolean;
  onToggle: (category: string) => void;
}

export default function DownloadCategory({ 
  category, 
  isOpen, 
  onToggle 
}: DownloadCategoryProps) {
  const items = getItemsByCategory(category);

  return (
    <div className="mb-6">
      <button
        onClick={() => onToggle(category)}
        className="w-full text-left font-bold text-lg bg-[#1e1e2f] p-4 rounded-lg hover:bg-[#2a2a3f] transition-all flex justify-between items-center font-orbitron"
      >
        <span>{category}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 pl-4 border-l-4 border-blue-500">
          {category === "Modul" ? (
            <div className="ml-2 bg-[#1b1b2b] p-5 rounded-lg border border-[#2e53b0] shadow flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-white text-base font-orbitron font-bold block">Pusat Modul Pembelajaran DevCamp</span>
                <span className="text-gray-400 text-xs block mt-1 font-sans">
                  Akses seluruh modul resmi UI/UX, HTML, dan CSS di halaman Modules.
                </span>
              </div>
              <Link
                href="/modules"
                className="bg-[#2e53b0] hover:bg-blue-600 text-white font-orbitron font-bold py-2.5 px-6 rounded-lg transition whitespace-nowrap text-sm flex items-center gap-2"
              >
                <span>Akses Modul</span>
                <span>➔</span>
              </Link>
            </div>
          ) : (
            <>
              {(category === "Rekaman" || category === "Materi") && (
                <div className="ml-2 mb-3 p-3 bg-[#22262E] border border-blue-500/30 rounded-lg text-blue-300 text-xs font-orbitron flex items-center gap-2">
                  <span>💡</span> Akses {category.toLowerCase()} kelas dibuka secara bertahap sesuai jadwal pelaksanaan sesi.
                </div>
              )}
              {items.map((item) => (
                <DownloadItem key={item.id} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}