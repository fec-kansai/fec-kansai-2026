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

## Branch Workflow (For Beginners)

Use this branch flow:

1. Create your feature branch from `dev`
2. Work only in your feature branch
3. Open PR from your feature branch into `dev`
4. Merge into `dev` after review

Example:

```bash
# switch to dev and update it
git checkout dev
git pull

# create feature branch from dev
git checkout -b feature/your-task-name

# after work is done
git add .
git commit -m "feat(web): your change"
git push -u origin feature/your-task-name
```

Then create a Pull Request:

- `base`: `dev`
- `compare`: `feature/your-task-name`
