"use client";
import { useState } from "react";
import { FilterComponent } from "./components/Filter/filterComponent";
import { NavbarComponent } from "./components/NavBar/navbarComponent";
import dynamic from "next/dynamic";
import { NearPlacesCards } from "./components/Places/nearPlaces";
import rawData from "./components/Places/hardCodedData";

const MapViewComponent = dynamic(() => import("./components/Map/mapViewComponent"), { ssr: false });

export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState([]);

  function handleToggleType(type) {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  }

  let places = rawData;
  if (selectedTypes.length > 0) {
    places = rawData.filter((place) => selectedTypes.includes(place.type));
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <NavbarComponent />
      <FilterComponent selectedTypes={selectedTypes} onToggleType={handleToggleType}>
        <MapViewComponent />
        <NearPlacesCards places={places} />
      </FilterComponent>
    </div>
  );
}
