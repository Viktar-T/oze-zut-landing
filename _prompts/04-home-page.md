You are editing `src/pages/index.astro`.

Goal:
Make the home page structurally similar to https://oze.zut.edu.pl/ while keeping the content concise and static.

Implement:

1. Wrap everything in `BaseLayout`:
   - `title`: "Katedra Inżynierii Odnawialnych Źródeł Energii – Strona Główna"
   - `description`: one sentence about studying and researching renewable energy at ZUT.

2. Add a hero section:
   - Full-width section with:
     - Heading: "Study and Research Renewable Energy"
     - Subheading (short, in English or PL/EN mix) about education & research in renewable energy engineering.
     - Button/link: "Poznaj Platformę EduBad" → `https://platform.oze.zut.edu.pl` (placeholder URL).
   - Use a background color or gradient and optionally a placeholder for hero image (no external assets hardcoded).

3. Add "About us" section:
   - `<h2>About us</h2>`
   - 1–2 short paragraphs explaining the department’s mission (paraphrase, no need to copy live text).

4. Add quick-link tiles/sections:
   - Boxes or list linking to:
     - Laboratories
     - Projects
     - Collaboration
     - Educators
     - Sponsors
     - Contacts
   - Each is a simple `<a>` block with short description.

5. Make layout responsive (mobile-friendly) using simple CSS or utility classes already defined.

No JS frameworks. Keep it pure Astro + HTML + CSS.
