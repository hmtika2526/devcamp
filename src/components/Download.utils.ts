import DownloadData from "@/data/download.json";

export const CATEGORIES = ["Modul", "Rekaman", "Materi"];

// Interface yang sesuai dengan data JSON sebenarnya
export interface DownloadItem {
  id: number; // atau string, sesuaikan dengan data
  name: string;
  description: string;
  url: string;
  status: string; // Biarkan string dulu, atau sesuaikan dengan nilai sebenarnya
  category: string;
}

// Type guard untuk memeriksa status
export function isAvailableStatus(status: string): boolean {
  return status === "Download" || status === "View";
}

export function getItemsByCategory(category: string): DownloadItem[] {
  return DownloadData.filter((item) => item.category === category) as DownloadItem[];
}

export function getVirtualBackgroundItems(): DownloadItem[] {
  return DownloadData.filter(
    (item) =>
      !CATEGORIES.includes(item.category) &&
      isAvailableStatus(item.status)
  ) as DownloadItem[];
}

// Helper untuk menentukan apakah item bisa didownload
export function canDownload(item: DownloadItem): boolean {
  return isAvailableStatus(item.status);
}

// Helper untuk menentukan apakah download atau view
export function isDownloadAction(status: string): boolean {
  return status === "Download";
}