## Personafy Web Client

This is a web client for the Personafy project. It is built with Next.js 14 and Tailwind CSS.

## Getting Started

First, ensure node and pnpm are installed:

```bash
node -v  # Must be on node >= v18.0.0
npm install -g pnpm
```

Then, install dependencies:

```bash
pnpm install
```

**Important:** Set up and run the GraphQL server before starting the next step, as codegen depends on types generated from the GraphQL server.

Next, create graphql typescript types:

```bash
pnpm codegen
```
Finally, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
