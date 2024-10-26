# Hubert

Assets manager like [Eagle](https://eagle.cool).

## Install

1. `pnpm install`
2. `pnpm run dev`

## Todo

- [] Add a dark/light theme switcher in Storybook [like Decathlon](https://github.com/Decathlon/vitamin-web/tree/main/packages/showcases/react/.storybook)
  - the @storybook/addon-themes addon seems to only accepts themes in a JS object... I need it to create a toggle in the Storybook preview header and add a class for each theme which will apply variables created in my scss files.
- [x] Fix <Stack> story so we can include native HTML elements in the `children` prop
- [x] Create a dynamic <Icon> component we can use in any context that loads custom SVG files [like Decathlon](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/react/src/components/forms/VtmnTextInput/VtmnTextInput.tsx#L162). They use [an icon font though](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/react/src/guidelines/iconography/VtmnIcon/VtmnIcon.tsx#L1).
  - https://stackoverflow.com/a/61472427/3906770 ✅
  - https://dev.to/seanyasno/handling-icons-in-react-best-practices-22c5
  - https://javascript.plainenglish.io/the-best-way-to-work-with-svg-icons-in-react-and-typescript-e6fb4d4601c6
- [x] Find a way to have native HTML attributes on the <Text> component when it's rendered as a label. It's the same idea with onClick on the <Stack> when it's rendered as a <button>.
- [] Fix the scroll in Storybook which is prevented from my global styles on the body w/ overflow:hidden. TL;DR: My global styles bleed into Storybook. I want a part of it to bleed but not everything.
- Handle light/dark theme following [this article](https://css-tricks.com/come-to-the-light-dark-side/)
