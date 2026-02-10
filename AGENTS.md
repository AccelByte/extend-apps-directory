# Extend Apps Directory

## Prerequisites

- Node.js LTS version, ideally v24
- Yarn modern (_with_ Corepack)

Always start with `yarn` in the root project to install the dependencies before you run any scripts in `package.json`, if you haven't already.

## Conventions

- Use React for the UI library.
- Use Bootstrap utility classes, such as `d-flex` or `m-4` to style components.
- Use Ant Design library for the UI components.
- Always generate formatted code with Prettier.
- When generating JavaScript syntaxes, use the syntaxes available from the `module` field from the currently used `tsconfig.json`.
- For styling, follow these order:
  - If possible to be styled built-in with Ant Design, use it.
  - If the Ant Design style can't be overridden with Bootstrap class, then create a `*.module.css` file CLOSE TO THE component that uses it (in the same folder as the component). Sometimes it needs `!important` to override Ant Design styles, only use it when it can't be overridden in a "normal way" (e.g. using higher CSS selector specificity).
- When running a code snippet (command line), use the following as terminal preference:
  - Windows: Powershell 7.
  - \*nix: Bash/Zsh.
- When it comes to naming variables:
  - Make sure booleans always start with `is`, `has`, or `can`. For example: `isModalOpen`, `hasQueryParameter`, `canUpdate`.
  - Make sure functions always start with a verb or if it returns boolean, use boolean-y name. For example: `showModal()`, `hasQueryParameter()`.

### React-specific conventions

- When hiding modals, prefer using `open` prop as opposed to returning `null`. For example:

```tsx
// Don't do this:
if (!isOpen) return null

// Instead:
<Modal open={isOpen} />
```

## Testing

Run `yarn prebuild && yarn typecheck` from the root project.
