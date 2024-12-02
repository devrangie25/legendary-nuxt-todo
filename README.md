# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt3 Project Directory

my-nuxt3-project/
├── .nuxt/               # Auto-generated directory by Nuxt (do not edit)
├── assets/              # Static assets such as styles, images, and fonts
├── components/          # Vue components
├── composables/         # Reusable logic and state management
├── content/             # Markdown or other content files (if using @nuxt/content)
├── layouts/             # Application layouts
├── middleware/          # Custom middleware functions
├── modules/             # Custom Nuxt modules
├── node_modules/        # Dependencies installed via npm or yarn
├── pages/               # Page components; routes are auto-generated based on this folder
├── plugins/             # Client-side or server-side plugins
├── public/              # Static files served as-is (e.g., robots.txt, favicon.ico)
├── server/              # API routes and server middleware
│   ├── api/             # Server API routes
│   └── middleware/      # Server middleware functions
├── store/               # Vuex stores (optional in Nuxt 3)
├── types/               # TypeScript types (optional)
├── utils/               # Utility functions
├── nuxt.config.ts       # Nuxt configuration file
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
├── tsconfig.json        # TypeScript configuration (optional)
└── yarn.lock / package-lock.json  # Dependency lock file

## To install Firebase
- npm install firebase
- create a plugin that will connect to our nuxt app to firebase console