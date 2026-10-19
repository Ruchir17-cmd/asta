# Astavakra Ayurved — Modern Redesign

A modern, minimalistic redesign of [astavakra.com](https://astavakra.com/), built with Node.js, Vite, React and Tailwind CSS.

## Stack
- **Frontend:** React 19, React Router, Tailwind CSS v4, Lucide icons
- **Backend:** Node.js + Express (contact API, static serving)
- **Build:** Vite

## Getting started

```bash
npm install
```

### Development
Run the API server and Vite dev server together:

```bash
npm run dev:all
```

- Frontend: http://localhost:5173
- API: http://localhost:3001

Or separately:

```bash
npm run server   # API on :3001
npm run dev      # Vite on :5173
```

### Production

```bash
npm run build
npm start        # serves built app + API on :3001
```

## Pages
Home · About · Shop (by concern) · Product detail · Contact · FAQ

## Notes
- Product catalog is in `src/data/products.js`.
- Contact form posts to `/api/contact`.
- Brand colors are defined in `src/index.css` via Tailwind v4 `@theme`.