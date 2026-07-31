import React from "react";
import Image from "next/image";
import { getCompressedUrl, getDownloadUrl, type SertifikatItem } from "./Sertifikat.utils";

interface SertifikatModalProps {
	modalItem: SertifikatItem | null;
	setModalItem: (item: SertifikatItem | null) => void;
	activeCDN: string;
}

export default function SertifikatModal({
	modalItem,
	setModalItem,
	activeCDN
}: SertifikatModalProps) {
	if (!modalItem) return null;

	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
			<div className="bg-[#1f1f2e] p-6 rounded-xl shadow-xl max-w-lg w-full relative">
				<h2 className="text-xl font-bold text-[#ffffff] mb-2">
					{modalItem.nama}
				</h2>
				<p className="text-gray-300 mb-4">
					{modalItem.no_sert}
				</p>
				<p className="text-gray-300 mb-4">
					{modalItem.status}
				</p>
				<div className="w-full aspect-[6250/4419] relative rounded-lg overflow-hidden border border-white/10">
					<Image
						src={getCompressedUrl(modalItem.code_sert, activeCDN)}
						alt={`Sertifikat ${modalItem.nama}`}
						fill
						className="object-contain"
					/>
				</div>

				<div className="mt-4 flex justify-end gap-5">
					<a
						target="_Blank"
						href={getDownloadUrl(modalItem.code_sert, activeCDN)}
						className="px-4 py-2 rounded-md bg-green-600 text-[#ffffff] text-sm hover:bg-green-700 transition"
					>
						Download PNG
					</a>
					<button
						className="x-4 px-5 py-2 rounded-md bg-red-600 text-[#ffffff] text-sm hover:bg-red-700 transition"
						onClick={() => setModalItem(null)}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}