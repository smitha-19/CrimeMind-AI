# CrimeMind AI — KSP Intelligence Unit Portal

A React + Vite + Tailwind CSS front-end recreation of the CrimeMind AI Stitch design package — an AI-powered crime investigation and intelligence platform built for a hackathon.

> **Note:** This is a **frontend-only** build using mock data. No backend/API is wired up yet.

## Tech Stack

- **React 18** + **Vite** — fast dev server & build tooling
- **React Router v6** — client-side routing with a protected-route pattern
- **Tailwind CSS** — utility-first styling, themed with the design system's exact tokens (colors, fonts, spacing) pulled from the original Stitch design
- **Material Symbols Outlined** — icon font used throughout the original design

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Demo Login

The login page uses mock authentication (no real backend). Enter **any** Service ID and password to sign in — session persists via `sessionStorage` until you sign out or close the tab.

## Folder Structure

```
src/
├── main.jsx                 # App entry point (Router + AuthProvider)
├── App.jsx                  # Route definitions
├── index.css                # Tailwind directives + global utility classes
│
├── context/
│   └── AuthContext.jsx      # Mock auth state (login/logout/session)
│
├── router/
│   └── ProtectedRoute.jsx   # Redirects unauthenticated users to /login
│
├── layouts/
│   └── AppLayout.jsx        # Sidebar + Topbar + <Outlet /> shell for all app pages
│
├── components/
│   ├── layout/               # Sidebar, Topbar, QuickActions (floating buttons)
│   ├── ui/                   # Reusable primitives: Icon, Card, Badge, Modal, Toggle, FilterBar
│   ├── dashboard/             # Dashboard-specific widgets (KPI cards, charts, feed, table)
│   ├── ai-assistant/          # Conversation history, chat window, insights panel
│   ├── network/               # Criminal network graph, filters, detail panel
│   ├── reports/                # Reports table + preview panel
│   └── officers/                # Personnel table + activity log panel
│
├── pages/                    # One top-level component per route (see Pages below)
│
└── data/                     # Centralized mock data modules (one per feature area)
```

## Pages / Routes

| Route                | Page                  |
|-----------------------|-----------------------|
| `/login`              | Login                 |
| `/dashboard`          | Command Dashboard     |
| `/ai-assistant`       | AI Assistant (chat)   |
| `/crime-analytics`    | Crime Analytics       |
| `/crime-heatmap`      | Predictive Heatmap    |
| `/criminal-network`   | Criminal Network graph|
| `/reports`            | Reports & Summaries   |
| `/officers`           | Officer Management    |
| `/settings`           | Settings              |

All routes except `/login` are wrapped in `ProtectedRoute` + `AppLayout`, so they share the same sidebar/topbar chrome automatically.

## Design System Notes

The Tailwind config (`tailwind.config.js`) mirrors the original Stitch design tokens 1:1 — same color names (`primary`, `surface-container-low`, `status-critical`, etc.), font families/sizes (`headline-xl`, `data-mono`, `label-caps`...), and spacing scale (`sidebar-width`, `topbar-height`, `gutter`...). This means any new component you build for this app can reuse the same class names as the original HTML mockups.

## Responsiveness

Every page adapts down to mobile:
- Sidebar becomes an off-canvas drawer below the `lg` breakpoint (hamburger menu in the Topbar).
- Multi-panel pages (AI Assistant, Criminal Network) collapse into a mobile tab switcher.
- Tables scroll horizontally on small screens instead of breaking layout.
- Dashboard/analytics grids reflow from 12-column to stacked single-column.

## What's Mocked

All data lives in `src/data/*.js` — FIR records, officers, reports, network nodes, chat messages, etc. — so the whole app runs standalone with no network calls. Swapping in a real API later mostly means replacing these data-fetch points with real requests inside the pages/hooks.

## Next Steps (Not in this build)

- Wire up a real backend/API and replace mock data with live fetches
- Add authentication with real credentials + JWT/session handling
- Real charting library integration (Recharts/D3) for analytics & trend charts
- Real interactive map (Leaflet/Mapbox) for the heatmap page
- Real force-directed graph library (e.g. react-force-graph) for Criminal Network
