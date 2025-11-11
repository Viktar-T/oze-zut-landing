You are updating the laboratories-related pages to mirror the structure of https://oze.zut.edu.pl.

Tasks:

1. Ensure directories:
   - `src/pages/labaratories/index.astro`
   - `src/pages/labaratories/lab-biogas/index.astro`
   - `src/pages/labaratories/lab-heat-boiler/index.astro`
   - `src/pages/labaratories/lab-heat-pump/index.astro`
   - `src/pages/labaratories/lab-algae/index.astro`
   - `src/pages/labaratories/lab-3d-printing/index.astro`
   - `src/pages/labaratories/lab-ic-engine/index.astro`

2. In `labaratories/index.astro`:
   - Use `BaseLayout` with title "Labaratoria – Katedra Inżynierii Odnawialnych Źródeł Energii".
   - Add `<h1>Labaratoria</h1>`.
   - List all labs as cards/links to their pages with 1–2 sentence placeholders.

3. In each lab page:
   - Wrap with `BaseLayout`.
   - Use `<h1>`:
     - "Lab. Biogas"
     - "Heat Boiler Laboratory"
     - "Heat Pump Laboratory"
     - "Lab. Algae"
     - "Lab. 3D printing"
     - "Lab. IC Engine"
   - Add sections:
     - Short description placeholder.
     - Equipment / research focus placeholder list.
     - Optional image placeholder (e.g. a `<div>` with background or `img` with local placeholder).

4. Keep URLs as defined. Do NOT change route names; they should mirror the current online version structure (even if “labaratories” is misspelled).
