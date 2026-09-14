"use client"
import { FilterComponent } from "./components/Filter/filterComponent";
import { NavbarComponent } from "./components/NavBar/navbarComponent";
import dynamic from "next/dynamic";

const MapViewComponent = dynamic(() => import("./components/Map/mapViewComponent"), { ssr: false });
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <NavbarComponent />
      <FilterComponent>
        <MapViewComponent />
      </FilterComponent>
    </div>
  );
}
