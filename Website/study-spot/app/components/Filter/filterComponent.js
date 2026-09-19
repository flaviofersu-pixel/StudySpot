"use client";
import { useState } from "react";

export function FilterComponent({ children, selectedTypes, onToggleType }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    function handleClick() {
        setIsFilterOpen((prev) => !prev);
    }

    if (!isFilterOpen) {
        return (
            <section className="flex min-h-0 flex-1 flex-col">
                <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-3 py-2">
                    <button
                        type="button"
                        onClick={handleClick}
                        className="rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800"
                    >
                        Filters
                    </button>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">{children}</div>
            </section>
        );
    }

    return (
        <section className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-3 py-2">
                <button
                    type="button"
                    onClick={handleClick}
                    className="rounded-full bg-zinc-800 px-4 py-1.5 text-sm font-medium text-white"
                >
                    Filters
                </button>
            </div>
            <div className="flex min-h-0 flex-1">
                <SideBarComponent
                    selectedTypes={selectedTypes}
                    onToggleType={onToggleType}
                />
                <div className="flex min-w-0 flex-1 flex-col">{children}</div>
            </div>
        </section>
    );
}

function SideBarComponent({ selectedTypes, onToggleType }) {
    return (
        <aside className="w-56 shrink-0 overflow-y-auto border-r border-zinc-200 bg-white p-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-zinc-500">
                TYPE
            </p>
            <label className="flex items-center gap-2 py-1.5 text-sm text-zinc-800">
                <input
                    type="checkbox"
                    checked={selectedTypes.includes("bibliotheek")}
                    onChange={() => onToggleType("bibliotheek")}
                />
                Bibliotheek
            </label>
            <label className="flex items-center gap-2 py-1.5 text-sm text-zinc-800">
                <input
                    type="checkbox"
                    checked={selectedTypes.includes("cafe")}
                    onChange={() => onToggleType("cafe")}
                />
                Café
            </label>
            <label className="flex items-center gap-2 py-1.5 text-sm text-zinc-800">
                <input
                    type="checkbox"
                    checked={selectedTypes.includes("school")}
                    onChange={() => onToggleType("school")}
                />
                School
            </label>
            <label className="flex items-center gap-2 py-1.5 text-sm text-zinc-800">
                <input
                    type="checkbox"
                    checked={selectedTypes.includes("studieplek")}
                    onChange={() => onToggleType("studieplek")}
                />
                Studieplek
            </label>
        </aside>
    );
}
