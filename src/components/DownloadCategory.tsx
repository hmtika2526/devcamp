import React from "react";
import DownloadItem from "./DownloadItem";
import { getItemsByCategory, type DownloadItem as DownloadItemType } from "./Download.utils";

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
        className="w-full text-left font-bold text-lg bg-[#1e1e2f] p-4 rounded-lg hover:bg-[#2a2a3f] transition-all flex justify-between items-center"
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
          {items.map((item) => (
            <DownloadItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}