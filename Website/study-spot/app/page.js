"use client"
import { NavBar } from "./components/NavBar/navbar";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./components/Map/mapView"), { ssr: false });
export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans">
      <NavBar />
      <MapView />
    </div>
  );
}
