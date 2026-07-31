import React from "react";
import SortAccordion from "@/components/Sertifikat.sortBy";
import TypeAccordion from "@/components/SertifikatTypeFilter";

interface SertifikatSearchProps {
	search: string;
	setSearch: (search: string) => void;
	sortBy: string;
	setSortBy: (sortBy: string) => void;
	typeFilter: string;
	setTypeFilter: (typeFilter: string) => void;
}

export default function SertifikatSearch({
	search,
	setSearch,
	sortBy,
	setSortBy,
	typeFilter,
	setTypeFilter
}: SertifikatSearchProps) {
	return (
		<div className="mt-6 flex flex-col lg:flex-col xl:items-center xl:justify-center gap-4">
			{/* Search Input */}
			<div className="w-full xl:w-[800px]">
				<input
					type="text"
					placeholder="Cari nama atau nomor sertifikat..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full py-5 px-4 rounded-lg bg-[#171a26] text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* Filter Buttons */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center xl:justify-start">
				<TypeAccordion typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
				<SortAccordion sortBy={sortBy} setSortBy={setSortBy} />
			</div>

		</div>

	);
}