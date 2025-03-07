This is a Next.js template simply based on [ui.shadcn.com](https://ui.shadcn.com/).

You can use this template as a starting point for your next project.

## Tech Stack
- [Next.js@15](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Contentlayer](https://contentlayer.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [E2E Testing with Playwright](https://playwright.dev/)

Biome is used for linting and formatting locally.

## Deploy to multiple platforms

### [github pages](asd55667.github.io/nextjs-template)

### [cloudflare pages](nextjs-template.wuchengwei.com)

Build command

``` shell
npx tsx --tsconfig ./tsconfig.scripts.json ./src/scripts/build-registry.mts && npx next build
```

### [vercel](https://nextjs-template-psi-six.vercel.app/)

Build command

``` shell
tsx --tsconfig ./tsconfig.scripts.json ./src/scripts/build-registry.mts && next build
```

## Screenshot
![](/tests/e2e/homepage.spec.ts-snapshots/homepage-chromium-darwin.png)

[Try it in stackblitz](https://stackblitz.com/github/asd55667/nextjs-template)
