"use client"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapViewComponent() {
    let getUserLocation = "";

    return (
        <section className="relative z-0 shrink-0 bg-zinc-50">
            <MapContainer
                center={[52.37, 4.89]}
                zoom={13}
                className="z-0 h-[52vh] w-full"
                style={{ height: "52vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap">
                </TileLayer>
            </MapContainer>
        </section>
    );
}