## Privacy Activist Kit CRUSH

This file provides conventions for building, testing, and writing code for this project.

### Commands

- **Development Server**: `npm run docs:dev`
- **Build**: `npm run docs:build`
- **Preview Production Build**: `npm run docs:preview`

There are no specific linting or test commands.

### Code Style

- **Formatting**: This project uses a Prettier-like style with 2-space indentation.
- **Imports**: Use ES6 `import/export` syntax as seen in `docs/.vitepress/config.mts`.
- **Naming Conventions**: Use camelCase for variables and filenames (e.g., `project-mission.md`).
- **Types**: The configuration is in TypeScript (`.mts`); use types when editing it.
- **Content**: All content is in Markdown (`.md`) files inside the `docs/` directory.
- **Error Handling**: Not applicable for this project's current state.
- **Dependencies**: Use `npm` to manage dependencies. Add new dependencies to `package.json`.
