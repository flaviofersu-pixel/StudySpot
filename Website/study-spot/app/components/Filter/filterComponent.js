"use client"
import { useState } from "react";

export function FilterComponent() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    function handleClick() {
        // prev inverts the values 
        setIsFilterOpen(prev => !prev);
    }

    if (isFilterOpen) {
        return (
            <section>
                <button onClick={handleClick}>
                    <span>Filters</span>
                </button>
            </section>
        );
    }

    return (
        <section>
            <button onClick={handleClick}>
                <span>Filters</span>
                <SideBarComponent />
            </button>
        </section>
    );
}

function SideBarComponent() {
    return (
        <aside>
            <div className="sidebar">
                <a className="Bibliotheek" href="#Bibliotheek">Bibliotheek</a>
                <a href="#Café">Café</a>
                <a href="#School">School</a>
                <a href="#Studieplek">Studieplek</a>
            </div>
            <div id="main"></div>
        </aside>
    );
}