import Image from "next/image";
import Link from "next/link";

export function NavbarComponent() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-md">
            <div className="h-1.5 w-full bg-brand" />
            <nav className="flex h-16 w-full items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 md:h-28 md:px-8">
                <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-5">
                    <Link href="/" className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                        <Image
                            src="/StudySpots-Logo-NoBG.png"
                            alt="StudySpot logo"
                            width={96}
                            height={96}
                            priority
                            className="h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24"
                        />
                        <span className="text-sm font-bold tracking-tight text-zinc-900 sm:text-xl md:text-2xl">
                            StudySpot
                        </span>
                    </Link>

                    <form className="min-w-0 flex-1 md:max-w-[28rem]" action="/" method="get">
                        <input
                            type="search"
                            placeholder="Zoek op naam, adres of buurt..."
                            className="h-9 w-full rounded-full border-2 border-zinc-300 bg-zinc-50 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20 sm:h-12 sm:px-5 sm:text-base md:h-14 md:px-6"
                        />
                    </form>
                </div>

                <div className="flex shrink-0 items-center gap-1 sm:gap-3">
                    {/* Only when signed in - future feat */}
                    <Link
                        href="/"
                        aria-label="Favorieten"
                        title="Favorieten"
                        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-orange-50 sm:h-11 sm:w-11"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 fill-yellow-400 stroke-orange-500 sm:h-6 sm:w-6"
                            aria-hidden="true"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </Link>
                    <Link
                        href="/"
                        className="rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-dark sm:px-5 sm:py-2.5 sm:text-base"
                    >
                        Inloggen
                    </Link>
                </div>
            </nav>
        </header>
    );
}
