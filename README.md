# Hubert

Assets manager like [Eagle](https://eagle.cool).

## Install

1. `pnpm i`
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
- [] Fix the import of my app style in Storybook. Importing the whole `style.scss` in `preview.ts` makes my app style bleed in Storybook which changes the SB UI.
- Handle light/dark theme following [this article](https://css-tricks.com/come-to-the-light-dark-side/)
- https://dev.to/peaonunes/loading-a-directory-as-a-tree-structure-in-node-52bg
- To Fix
  - [x] Afficher les assets présents au premier niveau du dossier root
  - [x] Ne pas afficher de <li> vides dans <FolderList> ni dans <AssetList>. Check que l'item est un dossier ou un fichier.
  - [x] Pouvoir sélectionner des dossiers enfants
  - [x] Comprendre pourquoi un <Folder> enfant d'un autre se sélectionne mais sélectionne son parent immédiatement après. En gros, la sélection de dossier fonctionne uniquement lorsque qu'un <Folder> n'en contient pas d'autres.
- Check [react-grid-gallery](https://www.npmjs.com/package/react-grid-gallery) to potentially add a masonry layout to the <AssetList> component
- Check https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/
- Check https://ishadeed.com/article/tree-view-css-indent/
- [] Add empty state in main view when no root directory is selected
- [] Update file data after each file has been parsed by the File System API:
  - [] `name`: "AI/test-folder/claude.jpg" -> "claude.jpg" (strip parent folders from name)
  - [] `size`: 808871 -> size in Gb/Mb/Kb...
  - [] Add EXIF data `UserComments` with potential existing value from file
  - [] `lastModified`: 1707337452174 -> `new Date(1707337452174)`
- [] Migrate TreeDirectory component from 'project 4' to this one
- [x] In "project 4" Save data to JSON without clicking the "Save to server button"

## How Eagle works under the hood

### 1. Folders

The folder tree is saved in a `metadata.json` file containing nodes with the following structure:

```ts
type Node = {
  id: string;
  name: string;
  description: string;
  children: Node[];
  modificationTime: number;
  tags: string[];
};
```

### 2. Assets

Eagle copies each asset within it's own folder named after an `${id}.info`.

The folder contains:

- the asset copy
- the asset thumbnail
- a `metadata.json` file with the following structure:
  ```ts
  type Asset = {
    id: string;
    name: string;
    size: number;
    ext: "jpg" | "png" | "webp" | "avif" | "gif" | "mp4";
    description: string;
    tags: string[];
    folders: string[]; // contains the id of its parent folders
    modificationTime: number;
    width: number;
    height: number;
    duration?: number;
  };
  ```

### 3. Tags

- Tags are saved in a `tags.json` file.
- Tags saved are not case sensitive
- a tag is a simple string
- tags are duplicated between the aforementioned `tags.json` and the `tags` array in all asset `metadata.json` respective files.

## Project prompt

```
You are a React, Vite and TypeScript expert.

I'm building a web app that allows me to manage assets stored on my computer. The file explorer is not enough and I want this app, to be my personal assets manager.

On the backend I have an API built with Express. This API lets me serve assets to the frontend. This backend takes as input a path targeting a root folder on my computer which contains all my assets and their respective parent folders. These assets can be images, videos, and PDFs.

I want my app to run locally and offline.

My file system and my app must stay in sync. It means that all new updates I make into my root folder containing my assets must be reflected in my application backend.

To replicate my files architecture from my file system here's what I plan to do:
1. Generate a tree node representing all my folders and their children (files and/or folders) in a JSON file
2. On a regular basis, I must regenerate this tree to detect potential updates made in my assets folder. I must identify added, deleted and modified nodes.
3. Compare the old and new tree node (using the json-diff package) while preserving the node id. You absolutely need to preserve the old id when merging the 2 trees.
4. Merge the old and new node trees together

How would you create such an app?

Be as precise as possible.
```

Or even better, create a dedicated prompt file like so: https://gist.github.com/yifanzz/3cfb8f9065769ffbf94348255f85597d

and take inspiration from: https://cursor.directory/

## Project update

The current logic is hard to work with and can be optimized.

What I do:

1. Generate a copy of my files/folders thanks to `directoryManager.ts` in a `data.json` file
2. Update a file or folder metadata on the frontend and update the corresponding object in the `data.json` file. To make this work I need to compare (`treeComparator.ts`) and merge (`treeMerger.ts`) the old tree with a new one which is cumbersome.

### Issues

Managing the logic to generate what I have in my file system, update it and keep it as simple and portable as possible is preventing me from focusing on what I want to learn: React.

### Solution

- Separate the generation of the file tree and the writing of my assets metadata
  - Use the [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) to generate all the data our frontend needs to display. This could be done when we launch the app. The [showDirectoryPicker()](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker) method could even be called during the user onboarding and saved in the browser `localStorage`. [Learn more](https://cloudfour.com/thinks/the-many-confusing-file-system-apis/).
  - Write metadata directly as EXIF data by using [sharp's withExifMerge() method](https://sharp.pixelplumbing.com/api-output#withexifmerge). Some exif properties seem to fit our use case. Unfortunately we can't create a custom EXIF property which would have been even better and future proof.
    - Potential limitations:
      - EXIF data may not be available on all file types (e.g., GIF)

### Todo

- [] Ajouter un empty state au démarrage de l'app si aucun dossier n'a été sélectionné (si rien dans `api/data.json`)
  - Utiliser le composant `<DirectoryPicker>`
- [] Modifier `<FolderList>` component pour qu'il prenne en compte la nouvelle structure des dossiers "flat" générée dans `data.json` (cf. project 4)
- []
