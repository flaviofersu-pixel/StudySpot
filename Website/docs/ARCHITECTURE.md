# Architecture

This is the plan for how StudySpot will be built.

## Folder structure

When i create the Next.js app, the useful parts will look like this:

```
website/
  study-spot/
    app/
      layout.js          site shell: page title, fonts, shared wrapper
      page.js            the main page
    components/
      SearchBar.js       the search input
      FilterChips.js     Cafe / OBA / School buttons
      MapView.js         the Leaflet map and pins
      PlaceCard.js       details for the selected place
    data/
      places.json        the list of places (until a backend exists)
```

```
page.js  (owns query, activeTypes, selectedPlace)
  ├── SearchBar     gets query, tells page when it changes
  ├── FilterChips   gets activeTypes, tells page when a chip is tapped
  ├── MapView       gets the filtered places, tells page when a pin is clicked
  └── PlaceCard     gets selectedPlace, tells page when the user closes it
```

## How a search + filter becomes pins

1. `page.js` loads all places from `places.json`.
2. It keeps only places whose `type` is in `activeTypes` (if no chip is on, keep all).
3. It keeps only places whose `name` matches `query` (ignore case).
4. That shorter list is passed to `MapView` as pins.
5. Clicking a pin sets `selectedPlace`. `PlaceCard` then appears.

## Data shape

Each mockdate place in JSON will look like this:

```json
{
  "id": "oba-oosterdok",
  "name": "OBA Oosterdok",
  "type": "oba",
  "lat": 52.3764,
  "lng": 4.9081,
  "address": "Oosterdokskade 143, Amsterdam",
  "openingHours": {
    "mon": "10:00–22:00",
    "tue": "10:00–22:00",
    "wed": "10:00–22:00",
    "thu": "10:00–22:00",
    "fri": "10:00–22:00",
    "sat": "10:00–18:00",
    "sun": "12:00–18:00"
  },
  "availability": "quiet"
}
```

| Field | Meaning |
| --- | --- |
| `id` | Stable unique name we can use in code |
| `name` | What the user reads |
| `type` | `"cafe"`, `"oba"`, or `"school"` (matches the chips) |
| `lat` / `lng` | Where the pin sits on the map |
| `address` | Shown on the card |
| `openingHours` | Shown on the card |
| `availability` | `"quiet"`, `"busy"`, or `"unknown"` for version 1 |

**Distance is not stored.** It depends on where the user is. Later ill calculate it from the user’s location (or from a searched area) to the place’s `lat` / `lng`.

## Leaflet (later)

[Leaflet](https://leafletjs.com/) draws a map in the browser. **react-leaflet** is a small wrapper so i can use it as a React component.

- Map tiles come from OpenStreetMap. No API key.
- Each place becomes a **marker** (pin) at its `lat` / `lng`.
- Clicking a marker calls a function we pass in, which sets `selectedPlace` in `page.js`.

## Backend later

Version 1 imports `places.json`. Later, `page.js` (or a small helper next to it) can `fetch` the same list from an API instead.

Because `SearchBar`, `FilterChips`, `MapView`, and `PlaceCard` only receive data as props, they do not need to know whether that data came from a file or a server.
