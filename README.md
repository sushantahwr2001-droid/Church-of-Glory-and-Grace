# Church of Glory and Grace Foundation Landing Page

A production-ready Next.js landing page for Church of Glory and Grace Foundation.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run build
```

## Editable Content

Most public-facing content lives in `src/data`:

- `site.ts` for foundation details, contact info, WhatsApp, donation details, and social URLs
- `work.ts` for image gallery cards and modal details
- `videos.ts` for YouTube video cards
- `testimonials.ts` for carousel items

Prayer requests are stored in `localStorage` for the prototype.

## Deploy Free With GitHub + Vercel

1. Create or use the GitHub repository `Church-of-Glory-and-Grace`.
2. Push this project to the GitHub repo.
3. Go to `https://vercel.com/new`.
4. Import the `Church-of-Glory-and-Grace` repository.
5. Framework preset: `Next.js`.
6. Build command: `npm run build`.
7. Install command: `npm install`.
8. Output directory: leave default.
9. Deploy on the Vercel free plan.

## GoDaddy Domain DNS For Vercel

After deployment, add your domain in:

`Vercel -> Project -> Settings -> Domains`

Then add these records in GoDaddy DNS unless Vercel shows different values:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 76.76.21.21 | Default |
| CNAME | www | cname.vercel-dns.com | Default |

Important:

- Remove or edit old conflicting `A` records for `@`.
- Remove or edit old conflicting `CNAME` records for `www`.
- Wait for DNS propagation.
- Check `Vercel -> Project -> Settings -> Domains` until the domain says valid.
- Confirm both `https://your-domain.com` and `https://www.your-domain.com` work.
