"use client";

import React, { useState, useEffect } from "react";
import DokumentasiClosingHeader from "./DokumentasiClosingHeader";
import DokumentasiClosingGrid from "./DokumentasiClosingGrid";
import DokumentasiClosingModal from "./DokumentasiClosingModal";
import {
	useCDN,
	dokumentasiClosingImage,
	getCompressedUrl
} from "./DokumentasiClosing.utils";

export default function DokumentasiClosing() {
	const activeCDN = useCDN();
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [selectedFilename, setSelectedFilename] = useState<string | null>(null);

	useEffect(() => {
		if (!activeCDN) return;
		const uniquePaths = Array.from(new Set(dokumentasiClosingImage));
		const allImages = uniquePaths.map(
			(filename) => getCompressedUrl(filename, activeCDN)
		);
		setImageUrls(allImages);
	}, [activeCDN]);

	const handleOpen = (url: string) => {
		const filename = url.replace(`${activeCDN}/images/devcamp/closing/jpg-compressed/`, "");
		setSelectedImage(url);
		setSelectedFilename(filename);
	};

	const handleClose = () => {
		setSelectedImage(null);
		setSelectedFilename(null);
	};

	return (
		<div className="mt-[50px] px-4 md:px-20">
			<DokumentasiClosingHeader />

			<DokumentasiClosingGrid
				imageUrls={imageUrls}
				activeCDN={activeCDN}
				onImageClick={handleOpen}
			/>

			<DokumentasiClosingModal
				selectedImage={selectedImage}
				selectedFilename={selectedFilename}
				activeCDN={activeCDN}
				onClose={handleClose}
			/>
		</div>
	);
}