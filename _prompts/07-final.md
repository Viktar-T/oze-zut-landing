You are preparing this Astro site for deployment to `oze.zut.edu.pl` as static HTML.

Tasks:

1. Check all internal links:
   - Ensure every menu item in `Navbar.astro` points to an existing `.astro` page.
   - Ensure all lab URLs, projects, collaboration, educators, sponsors, contacts routes resolve correctly.

2. Ensure no absolute dev URLs:
   - Use relative paths (`/path/`) for internal navigation.
   - Only external link: "Platforma EduBad" → placeholder `https://platform.oze.zut.edu.pl`.

3. Verify:
   - Every page uses `BaseLayout` with a proper `title` and `description`.
   - No unused imports, no console logs, no Node-only APIs.

4. Add minimal SEO/meta:
   - In `BaseLayout`, ensure `<html lang="pl">`.
   - Basic Open Graph tags using provided `title` and `description`.

5. Make sure styles are:
   - Responsive (mobile first),
   - Light and fast,
   - Not dependent on any server-side features.

6. After adjustments, assume I will run:
   - `npm run build`
   - and upload the contents of `dist/` to `/home/users/o/oz/oze/public_html/` on the university server.

Return only the final updated code files, no explanations.
