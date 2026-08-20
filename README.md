# AspireEdge Private Limited — MERN Stack

This is a MERN-stack (MongoDB, Express, React, Node.js) conversion of the original
ASP.NET Core MVC website (`ASPIREEDGE WEBSITE/AspireEdge`). It preserves the original
design, content, and static assets, and adds a real backend for the Contact form and
user Registration/Login (JWT-based auth, MongoDB storage, and email notifications).

## Project structure

```
aspireedge-mern/
├── client/          React + Vite frontend
│   ├── public/      All original static assets (css, js, images)
│   └── src/
│       ├── components/   Header, Footer, Layout, PageHTML
│       ├── pages/         One component per route (34 pages)
│       ├── pages/fragments  Converted HTML content extracted from the original .cshtml views
│       └── utils/         AuthContext, legacy-script reinit hook
└── server/          Express + MongoDB backend
    ├── models/       User, ContactMessage (Mongoose schemas)
    ├── routes/        /api/auth, /api/contact
    ├── middleware/    JWT auth guard
    └── utils/         JWT signing, Nodemailer email sending
```

## How the conversion was done

- All 34 ASP.NET Razor views (`Views/Home/*.cshtml`) were parsed and converted into
  clean static HTML fragments (Razor comments/code blocks stripped, `asp-action` links
  rewritten to React Router paths, `~/` and relative asset paths rewritten to absolute
  `/` paths). Each fragment is rendered through a `<PageHTML>` component.
- The shared `_Layout.cshtml` was hand-converted into real React components
  (`Header.jsx`, `Footer.jsx`, `Layout.jsx`) with working mobile-menu state.
- The **Contact** page and **Login/Register** page were hand-rebuilt as fully
  functional React components wired to the new Express API (instead of being static
  Razor forms / a third-party form service).
- The site's existing jQuery/Bootstrap theme (AOS, Swiper, Owl Carousel, Slick,
  Magnific Popup, GSAP) is still used as-is — all its JS/CSS files were copied into
  `client/public` and are loaded globally. Because this is now a single-page app,
  a small hook (`useReinitLegacyScripts`) re-runs the theme's init scripts after every
  route change so sliders/animations still work when navigating client-side.

## Prerequisites

- Node.js 18+
- A MongoDB instance (local `mongod`, or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)
- (Optional, for real emails) SMTP credentials — e.g. a Gmail account with an
  [App Password](https://myaccount.google.com/apppasswords)

## 1. Backend setup

```bash
cd server
cp .env.example .env
# edit .env: set MONGODB_URI, JWT_SECRET, SMTP_* and NOTIFY_EMAIL
npm install
npm run dev        # starts on http://localhost:5000
```

If SMTP is not configured, the API still works — contact messages and registrations
are still saved to MongoDB, emails are just skipped (a warning is logged).

## 2. Frontend setup

In a separate terminal:

```bash
cd client
npm install
npm run dev         # starts on http://localhost:5173
```

The Vite dev server proxies any `/api/*` request to `http://localhost:5000`
(see `client/vite.config.js`), so the two apps can be developed independently.

Open **http://localhost:5173** in your browser.

## 3. Production build

```bash
cd client
npm run build        # outputs static files to client/dist
```

Serve `client/dist` with any static host (Nginx, Vercel, Netlify, or Express's
`express.static`), and deploy `server/` as a normal Node.js API (Render, Railway,
Fly.io, EC2, etc.), pointing `MONGODB_URI` at your production database and
`CLIENT_ORIGIN` at your deployed frontend URL for CORS.

## API endpoints

| Method | Path                | Description                                  |
|--------|---------------------|-----------------------------------------------|
| POST   | `/api/auth/register`| Create a user account (hashed password), returns JWT |
| POST   | `/api/auth/login`   | Log in with email/password, returns JWT       |
| GET    | `/api/auth/me`      | Get current user (requires `Authorization: Bearer <token>`) |
| POST   | `/api/contact`      | Save a contact-form submission + email notification |
| GET    | `/api/health`       | Health check / Mongo connection status         |

## Routes (matching the original controller actions)

`/`, `/about`, `/solutions`, `/software`, `/infrastructure`, `/marketing`,
`/integration`, `/consulting`, `/contact`, `/login`, `/specialized-programs`,
`/bi`, `/aai`, `/demand`, `/testing`, `/privacy`, `/business`, `/cyber`, `/full`,
`/data`, `/internet`, `/cloud`, `/ml`, `/ai`, `/ui`, `/embedded`, `/auto`,
`/digital`, `/vehicles`, `/financial`, `/hr`, `/terms-conditions`,
`/privacy-policy`, `/careers`, `/disclaimer`

## Known limitations / next steps

- The legacy jQuery theme scripts are re-injected on every route change to keep
  animations/sliders working in the SPA; this is a pragmatic bridge rather than a
  native React re-implementation of Owl Carousel/Slick/AOS. For a longer-term
  cleanup, consider replacing them with React-native equivalents (e.g. Swiper's
  React bindings) page by page.
- The Facebook Pixel snippet from the original layout was intentionally left out;
  add it back in `client/index.html` if you still want it, and update the pixel ID.
- Contact/registration data currently has no admin UI — query MongoDB directly or
  build a simple `/admin` view if you want to browse submissions in the browser.
