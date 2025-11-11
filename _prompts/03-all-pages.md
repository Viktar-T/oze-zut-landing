You are an Astro expert refactoring my project.

Goal:
Make the Astro site structurally mirror https://oze.zut.edu.pl/ while keeping the code clean and modern.

Instructions:

1. Create `src/components/Navbar.astro`:
   - Left: site title: "Katedra Inżynierii Odnawialnych Źródeł Energii" (as a link to `/`).
   - Right: horizontal nav with links:
     - "Strona główna" → `/`
     - "Labaratoria" (dropdown)
       - "Lab. Biogas" → `/labaratories/lab-biogas/`
       - "Lab. Heat Boiler" → `/labaratories/lab-heat-boiler/`
       - "Lab. Heat Pump" → `/labaratories/lab-heat-pump/`
       - "Lab. Algae" → `/labaratories/lab-algae/`
       - "Lab. 3D printing" → `/labaratories/lab-3d-printing/`
       - "Lab. IC Engine" → `/labaratories/lab-ic-engine/`
     - "Projekty" → `/projects/`
     - "Współpraca" → `/colaboration/`
     - "Kadra" → `/educators/`
     - "Sponsorzy" → `/sponsors/`
     - "Kontakty" → `/contacts/`
   - On mobile: simple menu toggle (no heavy JS – use Astro + minimal inline script or CSS-only menu).
   - Style: sticky top, light background, subtle border-bottom, responsive.

2. Create `src/components/Footer.astro`:
   - Content:
     - "Copyright © 2025 Katedra Inżynierii Odnawialnych Źródeł Energii"
     - Short line: "Zachodniopomorski Uniwersytet Technologiczny w Szczecinie"
     - Link "Do góry" / scroll-to-top button.
   - Simple, centered, small text.

3. Create `src/layouts/BaseLayout.astro`:
   - Accept props: `title?: string`, `description?: string`.
   - Set `<title>` and `<meta name="description">` based on props.
   - Use a centered, max-width container for page content.
   - Include:
     - `<Navbar />` at the top.
     - A main wrapper for the page content.
     - `<Footer />` at the bottom.
   - Import and use `Navbar` and `Footer`.

4. Update ALL existing pages in `src/pages` to:
   - Import and wrap content with `BaseLayout`.
   - Pass a meaningful `title` per page (e.g. "Lab. Biogas – Katedra Inżynierii Odnawialnych Źródeł Energii").
   - Use semantic HTML (`<main>`, `<section>`, `<h1>`…).

Do NOT add any backend logic. Keep everything static and SPA-free.
