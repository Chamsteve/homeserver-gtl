# HomeServer GTL - Landing Page

## 🚀 Déploiement rapide sur Vercel

### Option 1 : Vercel (Recommandé - Gratuit)

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec GitHub
2. Crée un nouveau repo GitHub et upload ce dossier
3. Sur Vercel, clique "New Project" → Importe ton repo
4. Vercel détecte automatiquement Next.js → Clique "Deploy"
5. En 2 min tu as ton URL : `https://ton-projet.vercel.app`

### Option 2 : En local

```bash
# Installe les dépendances
npm install

# Lance en développement
npm run dev

# Ouvre http://localhost:3000
```

### Option 3 : Netlify

1. `npm run build`
2. Upload le dossier `.next` sur Netlify

## 📁 Structure

```
homeserver-landing/
├── app/
│   ├── globals.css      # Styles globaux + Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Landing page complète
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## ✨ Features

- ✅ Next.js 14 (App Router)
- ✅ Tailwind CSS
- ✅ Animations fluides
- ✅ 100% Responsive
- ✅ SEO optimisé
- ✅ Dark mode natif

## 🎨 Personnalisation

Modifie `app/page.tsx` pour changer :
- Textes et contenus
- Couleurs (recherche `blue-500`, `purple-600`)
- Sections (ajoute/supprime des composants)

## 📱 Sections incluses

1. **Navbar** - Navigation sticky avec menu mobile
2. **Hero** - Section d'accroche avec CTA
3. **Features** - 6 cards fonctionnalités
4. **Security** - Focus sécurité avec visuel
5. **Apps** - Les 3 applications
6. **Comparison** - Tableau comparatif
7. **CTA** - Call-to-action final
8. **Footer** - Pied de page

---

Made with ❤️ pour HomeServer GTL
