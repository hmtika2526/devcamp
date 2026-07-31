import dokuemntasiClosingData from "@/data/dokuemntasiClosing.json";
import { useEffect, useState } from "react";

// CDN setup
export const CDN_PRIMARY = "https://cdn.hmtika.web.id";
export const CDN_BACKUP = "https://cdn-2.hmtika.web.id";
export const UNCOMPRESSED_PATH = "/images/devcamp/closing/jpg/";
export const COMPRESSED_PATH = "/images/devcamp/closing/jpg-compressed/";

export const dokumentasiClosingImage = dokuemntasiClosingData.map((item) => item.image);

// Custom hook untuk CDN management
export function useCDN() {
  const [activeCDN, setActiveCDN] = useState(CDN_PRIMARY);

  useEffect(() => {
    const checkCDN = async () => {
      try {
        const testFile = dokumentasiClosingImage[0];
        const res = await fetch(`${CDN_PRIMARY}${COMPRESSED_PATH}${testFile}`, {
          method: "HEAD",
        });
        setActiveCDN(res.ok ? CDN_PRIMARY : CDN_BACKUP);
      } catch {
        setActiveCDN(CDN_BACKUP);
      }
    };
    checkCDN();
  }, []);

  return activeCDN;
}

// URL helpers
export const getCompressedUrl = (filename: string, activeCDN: string) => 
  `${activeCDN}${COMPRESSED_PATH}${filename}`;

export const getDownloadUrl = (filename: string, activeCDN: string) =>
  `${activeCDN}/?download=${UNCOMPRESSED_PATH}${filename}`;