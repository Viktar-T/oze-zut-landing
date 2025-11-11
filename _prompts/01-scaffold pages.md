Create an Astro layout and page structure for oze.zut.edu.pl.

Use src/layouts/BaseLayout.astro with:

top navigation (Home, Laboratories, Projects, Collaboration, Educators, Sponsors, Contacts, plus "Platforma EduBad" linking to https://platform.oze.zut.edu.pl as placeholder),

footer with ZUT and department info.

Create these pages:

src/pages/index.astro
src/pages/laboratories/index.astro
src/pages/laboratories/lab-biogas/index.astro
src/pages/projects/index.astro
src/pages/collaboration/index.astro
src/pages/educators/index.astro
src/pages/educators/dr-hab-inz-adam-koniuszy-kierownik/index.astro
src/pages/sponsors/index.astro
src/pages/contacts/index.astro
Each page should:

import and use BaseLayout,

have a clear <h1> and short placeholder content describing what will go there,

use semantic HTML.

Keep design clean, responsive, no heavy JS. Use simple CSS modules or a single global stylesheet.