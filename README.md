This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run type-check` - Vérifie les types TypeScript
- `npm run check` - Exécute lint + type-check (utile avant un commit)

## Workflow CI/CD

Le projet inclut un workflow GitHub Actions (`.github/workflows/ci.yml`) qui vérifie automatiquement :

1. **Linting (ESLint)** - Qualité et style du code
2. **Type checking (TypeScript)** - Vérification des types
3. **Build** - Compilation de l'application

Le workflow s'exécute automatiquement sur :
- Toutes les pull requests vers `main` ou `master`
- Tous les pushes directs sur `main` ou `master`

### Protection de branche (recommandé)

Pour activer la protection de branche sur GitHub :
1. Allez dans **Settings → Branches**
2. Ajoutez une règle pour `main` ou `master`
3. Cochez **"Require status checks to pass before merging"**
4. Sélectionnez **"quality-check"** dans la liste

Cela empêchera le merge si les vérifications échouent.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
