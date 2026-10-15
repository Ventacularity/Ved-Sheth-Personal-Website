# Ved Sheth: personal website

Portfolio site built with Next.js (app router, TypeScript), exported as static files.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to out/
```

## Where things are

- `lib/content.ts`: all copy (bio, experience, projects, table tennis results, links). Edit this file to change the site's text.
- `app/page.tsx`: home page.
- `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`: projects index and one page per project. Add a project by adding an entry to `projects` in `lib/content.ts`.
- `app/table-tennis/page.tsx`: results and the biography placeholder.
- `components/ImagePlaceholder.tsx`: stands in for photos. Replace its uses with real images once they're added (put files in a `public/` folder).
- `app/globals.css`: colors, type, and layout tokens at the top of the file.

## Hosting

The build is a plain static export in `out/`, so it works on Vercel, Netlify, or GitHub Pages.

For GitHub Pages served from `/<repo-name>`, build with the base path set:

```bash
NEXT_PUBLIC_BASE_PATH=/Ved-Sheth-Personal-Website npm run build
```

Skip that variable for a custom domain or a `<username>.github.io` repo.
