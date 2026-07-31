"use client";

import React, { useState, useEffect } from "react";
import SertifikatHeader from "@/components/SertifikatHeader";
import SertifikatSearch from "@/components/SertifikatSearch";
import SertifikatGrid from "@/components/SertifikatGrid";
import SertifikatModal from "@/components/SertifikatModal";
import { useSertifikatData, CDN_PRIMARY, CDN_BACKUP } from "@/components/Sertifikat.utils";

export default function Sertifikat() {
	const [activeCDN, setActiveCDN] = useState(CDN_PRIMARY);
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("default");
	const [typeFilter, setTypeFilter] = useState("all");
	const [modalItem, setModalItem] = useState<any | null>(null);
	const [visibleCount, setVisibleCount] = useState(10);

	const { sortedData, displayedData } = useSertifikatData({
		search,
		sortBy,
		typeFilter,
		visibleCount,
		activeCDN
	});

	useEffect(() => {
		const checkCDN = async () => {
			try {
				const testFile = "4113_63_VIII_HMTIKA_2025.jpg"; // You might want to use actual data here
				const res = await fetch(`${CDN_PRIMARY}/images/devcamp/sertifikat_compress_jpg/${testFile}`, {
					method: "HEAD",
				});
				setActiveCDN(res.ok ? CDN_PRIMARY : CDN_BACKUP);
			} catch {
				setActiveCDN(CDN_BACKUP);
			}
		};
		checkCDN();
	}, []);

	return (
		<div className="mt-[50px] px-4 md:px-20">
			<SertifikatHeader />

			<SertifikatSearch
				search={search}
				setSearch={setSearch}
				sortBy={sortBy}
				setSortBy={setSortBy}
				typeFilter={typeFilter}
				setTypeFilter={setTypeFilter}
			/>

			<SertifikatGrid
				data={displayedData}
				activeCDN={activeCDN}
				setModalItem={setModalItem}
				visibleCount={visibleCount}
				totalCount={sortedData.length}
				setVisibleCount={setVisibleCount}
			/>

			<SertifikatModal
				modalItem={modalItem}
				setModalItem={setModalItem}
				activeCDN={activeCDN}
			/>
		</div>
	);
}