# StudySpot

StudySpot helps people in the Netherlands find a place to study or work nearby: cafes, OBA libraries, and schools. You search and filter on a map, then open a place to see opening hours, availability, and distance.

## Who it is for

Students and remote workers who want a quiet-enough spot without guessing which cafe is packed or which library is still open.

## What the demo does - pure Frontend

The first version will be a **single main page**:

- A search bar to look up a place by name
- Filter for **Cafe**, **OBA**, and **School**
- A map with a pin for each place
- A detail card that appears when you click a pin (hours, availability, address, distance)

Data comes from a **static JSON file**. There is no login, no backend, and no live availability yet (only raw data).

## What comes later - Backend

A real backend will replace the JSON file so places, hours, and availability stay up to date. The page layout and components stay the same; only where the data comes from changes.

## Planned tech (not installed yet)

| Tool | Role |
| --- | --- |
| Next.js (App Router, JavaScript) | Pages and components |
| Tailwind CSS | Styling with classes |
| Leaflet + react-leaflet | Map and pins (so there is no API key needed) |
| `data/places.json` | Place list until a backend exists |

## How this project is built

- Components stay small and single-purpose (`SearchBar`, `Filter`, `MapView`, `PlaceCard`).
- Styling stays in Tailwind classes, not extra CSS files (or one for the index.html).

## Docs in this folder

| File | What it is |
| --- | --- |
| [docs/THINKING.md](docs/THINKING.md) | Why this layout: user flow, sketches, layout choices |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | How it will look: folders, data, etc |
| [docs/wireframes/](docs/wireframes/) | stetches, the website layout |
