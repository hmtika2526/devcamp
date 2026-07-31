import { useState, useEffect, useMemo } from "react";
import sertifikatData from "@/data/Sertifikat.json";
import levenshtein from "@/function/leverstein";

// CDN setup
export const CDN_PRIMARY = "https://cdn.hmtika.web.id";
export const CDN_BACKUP = "https://cdn-2.hmtika.web.id";
export const UNCOMPRESSED_PATH = "/images/devcamp/sertifikat/";
export const COMPRESSED_PATH = "/images/devcamp/sertifikat_compress_jpg/";

// Interface yang sesuai dengan data JSON
export interface SertifikatItem {
	id: number; // atau string, sesuaikan dengan data JSON
	nama: string;
	no_sert: string;
	status: string;
	code_sert: string;
	type: string;
}

// Type untuk data JSON
export type SertifikatData = SertifikatItem[];

// URL helpers
export const getCompressedUrl = (code: string, activeCDN: string) =>
	`${activeCDN}${COMPRESSED_PATH}${code}.jpg`;

export const getDownloadUrl = (code: string, activeCDN: string) =>
	`${activeCDN}?download=${UNCOMPRESSED_PATH}${code}.png`;

// Parsing utilities
export function parseNoSert(no: string): number[] {
	return no.split("/").map((part) => {
		const num = parseInt(part, 10);
		return isNaN(num) ? 0 : num;
	});
}

export function isNumericSearch(query: string): boolean {
	return /[0-9/]/.test(query);
}

// Search functions
export function searchByName(query: string, data: SertifikatData) {
	const q = query.toLowerCase().trim();

	return data
		.map((item) => {
			const nama = item.nama.toLowerCase().trim();
			const tokens = nama.split(/\s+/);

			const distances = tokens.map((token) => levenshtein(q, token));
			const minDistance = Math.min(...distances);

			const isSubstring = nama.includes(q);
			const priority = isSubstring ? 0 : minDistance;

			return { item, priority };
		})
		.filter(({ priority }) => priority <= 2)
		.sort((a, b) => a.priority - b.priority)
		.map(({ item }) => item);
}

export function searchByNomor(query: string, data: SertifikatData) {
	const q = query.toLowerCase().trim();

	return data
		.filter((item) => item.no_sert.toLowerCase().includes(q))
		.sort((a, b) => a.no_sert.localeCompare(b.no_sert));
}

// Custom hook for data management
export function useSertifikatData({
	search,
	sortBy,
	typeFilter,
	visibleCount,
	activeCDN
}: {
	search: string;
	sortBy: string;
	typeFilter: string;
	visibleCount: number;
	activeCDN: string;
}) {
	const searchedData = useMemo(() => {
		if (search.trim() === "") return [...sertifikatData as SertifikatData];

		return isNumericSearch(search)
			? searchByNomor(search, sertifikatData as SertifikatData)
			: searchByName(search, sertifikatData as SertifikatData);
	}, [search]);

	const typeFilteredData = useMemo(() => {
		return typeFilter === "all"
			? searchedData
			: searchedData.filter(
				(item) => item.type.toLowerCase() === typeFilter.toLowerCase()
			);
	}, [searchedData, typeFilter]);

	const sortedData = useMemo(() => {
		if (sortBy === "nama") {
			return [...typeFilteredData].sort((a, b) => a.nama.localeCompare(b.nama));
		} else if (sortBy === "nomor") {
			return [...typeFilteredData].sort((a, b) => {
				const aParts = parseNoSert(a.no_sert);
				const bParts = parseNoSert(b.no_sert);
				for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
					if ((aParts[i] || 0) !== (bParts[i] || 0)) {
						return (aParts[i] || 0) - (bParts[i] || 0);
					}
				}
				return 0;
			});
		} else {
			return search.trim() === ""
				? [...typeFilteredData].sort((a, b) => a.nama.localeCompare(b.nama))
				: [...typeFilteredData];
		}
	}, [typeFilteredData, sortBy, search]);

	const displayedData = useMemo(() => {
		return sortedData.slice(0, visibleCount);
	}, [sortedData, visibleCount]);

	return {
		sortedData,
		displayedData
	};
}