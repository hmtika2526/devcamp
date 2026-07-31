"use client";

import React, { useState } from "react";
import DownloadHeader from "./DownloadHeader";
import DownloadCategory from "./DownloadCategory";
import VirtualBackgroundSection from "./VirtualBackgroundSection";
import { CATEGORIES } from "./Download.utils";

export default function Download() {
	const [openCategory, setOpenCategory] = useState<string | null>(null);

	const toggleCategory = (category: string) => {
		setOpenCategory((prev) => (prev === category ? null : category));
	};

	return (
		<div className="py-12 pt-[100px] container mx-auto text-white" id="about">
			<DownloadHeader />

			<div className="mt-10 w-full px-4 md:px-20">
				{CATEGORIES.map((category) => (
					<DownloadCategory
						key={category}
						category={category}
						isOpen={openCategory === category}
						onToggle={toggleCategory}
					/>
				))}

				<VirtualBackgroundSection />
			</div>
		</div>
	);
}