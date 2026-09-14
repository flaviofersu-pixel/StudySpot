"use client"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapViewComponent() {
    let getUserLocation = "";

    return (
        <section className="h-full min-h-[70vh] bg-zinc-50">
            <MapContainer
                center={[52.37, 4.89]}
                zoom={13}
                className="h-[70vh] w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap">
                </TileLayer>
            </MapContainer>
        </section>
    );
}