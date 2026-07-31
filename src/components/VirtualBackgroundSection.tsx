import React from "react";
import DownloadItem from "./DownloadItem";
import { getVirtualBackgroundItems } from "./Download.utils";

export default function VirtualBackgroundSection() {
	const items = getVirtualBackgroundItems();

	if (items.length === 0) return null;

	return (
		<div className="mt-10">
			<h3 className="text-lg font-bold mb-4">Virtual Background</h3>
			<div className="space-y-3">
				{items.map((item) => (
					<DownloadItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}