# MODEN — Next.js Website

**Default language:** Greek (`/`), **English:** `/en`  
**Domain target:** https://moden.gr  
**Contact email:** info@modendevelopment.gr

## Run locally
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy (Vercel)
1. Create a new Vercel project, import this repo.
2. (Optional) Add `RESEND_API_KEY` as an Environment Variable to enable server-side email sending.
3. Set Production Domain to `moden.gr` (and add `www.moden.gr` if you want).

## Add project photos
Replace the placeholder blocks in the *Projects* section by dropping images into `public/` and editing the `app/page.tsx` entries (background-image or Next `<Image />`).

## Customize palette
Edit `tailwind.config.ts` colors or tweak `:root` variables in `app/globals.css`.
