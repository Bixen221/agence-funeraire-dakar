# Agence Funéraire de Dakar

Site vitrine mobile first (Next.js 15, Tailwind CSS v4), déployé sur Vercel.

## Lancer en local
```bash
npm install
npm run dev
```

## Où modifier quoi
- Coordonnées, formules, étapes du guide, FAQ : `src/lib/site.ts`
- Logo (provisoire) : remplacer `public/logo.svg` et `src/app/icon.svg` par le logo final
- Couleurs et polices : `src/app/globals.css` (bloc `@theme`)
- URL de production (SEO, sitemap) : `site.url` dans `src/lib/site.ts`

## Pages
Accueil, Formules (`/services`), Démarches, Diaspora, Demande de prise en charge (envoi WhatsApp ou e-mail, sans serveur), Contact + FAQ.
