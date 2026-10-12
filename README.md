# Hariharan Thiyagarajan — Portfolio

Responsive React portfolio for Hariharan Thiyagarajan, a frontend and software engineer in Chennai. Light mode uses a cool pastel canvas. Dark mode uses a neon glass treatment. Theme choice is stored in the browser.

## Stack

- Vite + React
- Tailwind CSS
- Framer Motion

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Asset paths are relative (`base: './'` in `vite.config.js`), so the same build works on GitHub project pages and user pages.

## GitHub Pages

Use one deploy path. Running both will race.

### Option A — GitHub Actions

1. Push this project to GitHub on the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main`. `.github/workflows/deploy.yml` builds `dist` and publishes it.

### Option B — `gh-pages` package

1. Push the project and confirm the default branch is `main`.
2. From the project root:

```bash
npm run deploy
```

That builds the site and publishes `dist` to the `gh-pages` branch.

3. In **Settings → Pages**, set the source to the `gh-pages` branch and the folder to `/ (root)`.

`public/.nojekyll` is copied into the build so GitHub does not pass the site through Jekyll.

### Base path

`vite.config.js` sets `base: './'`. Leave that in place for a repository site such as `https://<user>.github.io/<repo>/`. If you later attach a custom domain at the root of a user site, `./` still resolves correctly.

## Content files

| File | Role |
| --- | --- |
| `src/data/portfolioData.js` | Bio, links, skills, projects, experience |
| `public/profile.jpg` | Hero portrait |
| `public/about.jpg` | About portrait |
| `public/resume.pdf` | Resume download |

Replace those public files and keep the same names if you update the photo or resume. The hero image is referenced as `` `${import.meta.env.BASE_URL}profile.jpg` `` so it stays correct after a GitHub Pages deploy.
