"use client";

import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

export const MapContact = () => {
	return (
		<div className="z-0 mx-auto w-full max-w-4xl">
			<MapContainer
				center={[53.71667, -1.8575]}
				zoom={7}
				className="h-[350px] w-full rounded"
				zoomControl={false}
			>
				<TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
				<ZoomControl position="topleft" />
				<Marker
					position={[53.71667, -1.8575]}
					title="Halifax, UK"
					icon={createCustomIcon()}
				/>
			</MapContainer>
		</div>
	);
};

const createCustomIcon = () => {
	return divIcon({
		html: `
        <div class="flex items-center justify-center h-14 w-24 text-center rounded bg-orange-400 text-white font-bold text-xl shadow-lg">
          Halifax, UK
        </div>
      `,
		className: "custom-marker",
		iconSize: undefined,
		iconAnchor: [20, 20],
	});
};
