# Insurance Mock Dashboard

# ONLINE VERSION

See the deployed version here (use VPN if needed): https://insurance-tau-snowy.vercel.app/

This submitted data is persisted is session storage using redux-persist to save the data on page refresh. A try again button has been developed to allow the user testing this project to clean that persisted data without closing their window tab.

<img width="1920" height="837" alt="image" src="https://github.com/user-attachments/assets/af461a3d-26f4-45c7-985b-667890be3c70" />


## 📦 This project was made with:
Framework: Next.js (v15.4.5)

Language: TypeScript (v5)

UI: Tailwind CSS (v4), clsx

Forms: React Hook Form (v7.62.0), Zod (v4), @hookform/resolvers

State Management: Redux Toolkit (v2.8.2), React Redux (v9.2.0), Redux Persist (v6.0.0)

Data Fetching & Caching: TanStack React Query (v5.84.1), Axios (v1.11.0)

Linting & Formatting: ESLint (v9), eslint-config-next

Type Definitions: @types/react, @types/node

Build Tools: Next.js Scripts (dev, build, start, lint)

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
