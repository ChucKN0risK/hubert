# Hubert

Assets manager like [Eagle](https://eagle.cool).

## Install

1. `pnpm install`
2. `pnpm run dev`

## Todo

- Add a dark/light theme switcher in Storybook [like Decathlon](https://github.com/Decathlon/vitamin-web/tree/main/packages/showcases/react/.storybook)
- Fix <Stack> story so we can include native HTML elements in the `children` prop
- Create a dynamic <Icon> component we can use in any context that loads custom SVG files [like Decathlon](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/react/src/components/forms/VtmnTextInput/VtmnTextInput.tsx#L162). They use [an icon font though](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/react/src/guidelines/iconography/VtmnIcon/VtmnIcon.tsx#L1).
  - https://stackoverflow.com/a/61472427/3906770
  - https://dev.to/seanyasno/handling-icons-in-react-best-practices-22c5
  - https://javascript.plainenglish.io/the-best-way-to-work-with-svg-icons-in-react-and-typescript-e6fb4d4601c6
- Find a way to have native HTML attributes on the <Text> component when it's rendered as a label. It's the same idea with onClick on the <Stack> when it's rendered as a <button>.
