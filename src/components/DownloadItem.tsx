import React from "react";
import { DownloadItem as DownloadItemType, isAvailableStatus, isDownloadAction } from "./Download.utils";

interface DownloadItemProps {
  item: DownloadItemType;
}

export default function DownloadItem({ item }: DownloadItemProps) {
  const isAvailable = isAvailableStatus(item.status);
  const isDownload = isDownloadAction(item.status);

  return (
    <div className="ml-2 bg-[#1b1b2b] p-4 rounded-lg border border-[#2e53b0] shadow flex justify-between items-center">
      <div className="flex-1">
        <span className="text-white text-sm block">{item.name}</span>
        {item.description && (
          <span className="text-gray-400 text-xs block mt-1">{item.description}</span>
        )}
      </div>
      
      {isAvailable ? (
        <a
          href={item.url}
          download={isDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2e53b0] text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition whitespace-nowrap ml-4"
        >
          {item.status}
        </a>
      ) : (
        <span className="text-yellow-300 text-sm flex items-center gap-1 whitespace-nowrap ml-4">
          {item.status} <span>🔒</span>
        </span>
      )}
    </div>
  );
}