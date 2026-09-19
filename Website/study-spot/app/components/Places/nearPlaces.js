export function NearPlacesCards({ places }) {
    if (places.length === 0) {
        return (
            <section className="border-t border-zinc-200 bg-white px-4 py-6">
                <h2 className="mb-4 text-lg font-semibold text-zinc-900">
                    Studieplekken in de buurt
                </h2>
                <p className="text-sm text-zinc-600">Geen plekken gevonden.</p>
            </section>
        );
    }

    return (
        <section className="border-t border-zinc-200 bg-white px-4 py-6">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900">
                Studieplekken in de buurt
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {places.map((place) => (
                    <article
                        key={place.title}
                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                    >
                        <div className="mb-3 h-24 rounded-lg bg-zinc-200" />
                        <h3 className="font-semibold text-zinc-900">{place.title}</h3>
                        <p className="mt-1 text-sm text-zinc-600">{place.location}</p>
                        <p className="mt-2 text-sm font-medium text-zinc-700">
                            {place.availability}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
