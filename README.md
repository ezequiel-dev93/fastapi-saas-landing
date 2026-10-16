# FastAPI SaaS Boilerplate — Sales Landing Page

Standalone, ultra-lightweight marketing landing page for the **FastAPI SaaS Boilerplate**, designed for static deployment on **Cloudflare Pages**.

## Tech Stack
- **Framework:** Next.js 16 (Static Export `output: 'export'`)
- **UI & Styling:** React 19, Tailwind CSS v4, Lucide Icons
- **i18n:** Bilingual context (English / Spanish)
- **Theme:** Dynamic Dark / Light theme toggle (`next-themes`)
- **Checkout:** Official Lemon Squeezy overlay integration

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Static Build

```bash
pnpm build
```

This compiles static HTML/CSS/JS into the `out/` directory.

## Cloudflare Pages Deployment

1. Create a new project in **Cloudflare Pages** connected to this repository.
2. Configure build settings:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
3. In **Custom Domains**, add your subdomain:
   - `saas.ezequielsuarez-dev.com`
4. Set environment variables (optional):
   - `NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL`
