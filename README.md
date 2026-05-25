# Frontend Conference Kansai 2026

Official website for Frontend Conference Kansai 2026.

## Development

```bash
# Install dependencies
pnpm install

# Start dev servers (Next.js + Storybook)
pnpm dev

# Next.js only
pnpm -F web dev

# Storybook only
pnpm -F storybook dev
```

## Build

```bash
# Generate static files → apps/web/out/
pnpm build
```

## Code Quality

```bash
# Lint + format check
pnpm check

# Auto fix
pnpm check:fix
```

## Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/).
Biome runs on pre-commit and commitlint runs on commit-msg automatically.
