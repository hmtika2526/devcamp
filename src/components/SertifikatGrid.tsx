import React, { useEffect } from "react";
import Image from "next/image";
import { getCompressedUrl, getDownloadUrl, type SertifikatItem } from "./Sertifikat.utils";

interface SertifikatGridProps {
	data: SertifikatItem[];
	activeCDN: string;
	setModalItem: (item: SertifikatItem | null) => void;
	visibleCount: number;
	totalCount: number;
	setVisibleCount: (count: number | ((prev: number) => number)) => void;
}

export default function SertifikatGrid({
	data,
	activeCDN,
	setModalItem,
	visibleCount,
	totalCount,
	setVisibleCount
}: SertifikatGridProps) {

	useEffect(() => {
		const interval = setInterval(() => {
			setVisibleCount((prev) => {
				if (prev >= totalCount) return prev;
				return prev + 10;
			});
		}, 3000);

		return () => clearInterval(interval);
	}, [totalCount, setVisibleCount]);

	if (data.length === 0) {
		return (
			<p className="text-center text-gray-400">Tidak ada hasil ditemukan.</p>
		);
	}

	return (
		<div className="mt-10 p-8 rounded-2xl">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
				{data.map((item) => (
					<SertifikatCard
						key={item.id}
						item={item}
						activeCDN={activeCDN}
						setModalItem={setModalItem}
					/>
				))}
			</div>

			{visibleCount < totalCount && (
				<LoadMoreButton setVisibleCount={setVisibleCount} />
			)}
		</div>
	);
}

function SertifikatCard({
	item,
	activeCDN,
	setModalItem
}: {
	item: SertifikatItem;
	activeCDN: string;
	setModalItem: (item: SertifikatItem) => void;
}) {
	return (
		<div className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center">
			<div className="relative w-full aspect-[6250/4419] rounded-lg overflow-hidden border border-white/10">
				<Image
					src={getCompressedUrl(item.code_sert, activeCDN)}
					alt={`Sertifikat ${item.nama}`}
					fill
					className="object-contain"
				/>
			</div>
			<h3 className="mt-4 text-lg font-bold text-white">{item.nama}</h3>
			<p className="text-sm text-gray-300">{item.no_sert}</p>
			<p className="text-xs text-blue-300 italic">{item.status}</p>
			<div className="flex gap-3 mt-4">
				<a
					target="_Blank"
					href={getDownloadUrl(item.code_sert, activeCDN)}
					className="px-3 py-1 rounded-md bg-green-600 text-white text-sm hover:bg-green-700 transition"
				>
					Download
				</a>
				<button
					onClick={() => setModalItem(item)}
					className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
				>
					Lihat
				</button>
			</div>
		</div>
	);
}

function LoadMoreButton({
	setVisibleCount
}: {
	setVisibleCount: (count: number | ((prev: number) => number)) => void;
}) {
	return (
		<div className="flex justify-center mt-6">
			<button
				onClick={() => setVisibleCount((prev: number) => prev + 10)}
				className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
			>
				Load More
			</button>
		</div>
	);
}