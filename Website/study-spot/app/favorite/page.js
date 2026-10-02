export default function FavoritePage() {
    let favoriteList = mockFavoriteList;

    if (favoriteList.length === 0) {
        return (
            <section className="border-t border-zinc-200 bg-white px-4 py-6">
                <h2 className="mb-4 text-lg font-semibold text-zinc-900">
                    Jou favorite studieplekken
                </h2>
                <p className="text-sm text-zinc-600">je hebt geen favorite plekken.</p>
            </section>
        );
    }

    return (
        <div>
            {favoriteList.map((favoriteList) => (
                <section>
                    <div className="mb-3 h-24 rounded-lg bg-zinc-200" />
                        <h3 className="font-semibold text-zinc-900">{favoriteList.title}</h3>
                        <p className="mt-1 text-sm text-zinc-600">{favoriteList.location}</p>
                        <p className="mt-2 text-sm font-medium text-zinc-700"></p>
                        <button>X</button>
                </section>
            ))}
        </div>
    );
}

const mockFavoriteList = [
    {
        img: "/...",
        title: "HvA WibautHuis",
        location: "Locatie",
        type: "school"
    },
    {
        img: "/...",
        title: "coffee company",
        location: "Locatie",
        type: "cafe",

    }
]