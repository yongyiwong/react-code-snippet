# VRC Member Hub

Project Summary

### Tech Stack

What is this codebase using

- React
- Language: Typescript
- State: Zustand
- Animations: (react-spring recommended)
- Styles: Tailwind css

### Get Started

Installing dependencies:
`yarn`

Running
`yarn start`

Updating libraries
`yarn upgrade-interactive --latest`

### Deployement

- Approval
- Process
- Files/ci-cd configuration location

### Testing

To check for project wide typescript errors:
`yarn tsc --noEmit`

### Code Guidelines

##### Readability

Auto formatting provided by prettier and eslint
the configuration files can be found in:
`.prettierrc.js`
`.eslintrc.js`

Guidelines for suggested code format

- Sensible, descriptive, unique & full (non-abbreviated) names variables, methods & classes

##### Patterns

- Subdirectories and general file names: camelCase
- Component folder/file names: PascalCase
- prefer exporting functions with the function keyword instead of const (although not high priority)

##### Philosophy

- Multi-use utils or helpers can go in the "/helpers" directory, it's okay to include multiple helpers inside a single file like strings.ts
- SubComponents that are only used inside one component can be stored inside the components own folder, e.g MyContactList/ContactItem.tsx
- External libraries that handle subscriptions or state updates, can be wrapped in a new zustand store to keep project code consistent and learnable, e.g instead of using react-native's 'AppState.addEventListener' directly, a new "appState" store could be made with its own state that updates its state inside a AppState.addEventListener listener, then the store's state can be accessed in multiple components with the familiar useStore syntax
