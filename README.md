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
- [] Fix the import of my app style in Storybook. Importing the whole `style.scss` in `preview.ts` makes my app style bleed in Storybook which changes the SB UI.
- Handle light/dark theme following [this article](https://css-tricks.com/come-to-the-light-dark-side/)
- https://dev.to/peaonunes/loading-a-directory-as-a-tree-structure-in-node-52bg
- To Fix
  - [x] Afficher les assets présents au premier niveau du dossier root
  - [x] Ne pas afficher de <li> vides dans <FolderList> ni dans <AssetList>. Check que l'item est un dossier ou un fichier.
  - [x] Pouvoir sélectionner des dossiers enfants
  - [x] Comprendre pourquoi un <Folder> enfant d'un autre se sélectionne mais sélectionne son parent immédiatement après. En gros, la sélection de dossier fonctionne uniquement lorsque qu'un <Folder> n'en contient pas d'autres.
- Check [exifreader](https://www.npmjs.com/package/exifreader) to extract info from asset for the <AssetInfo> component
- Check [react-grid-gallery](https://www.npmjs.com/package/react-grid-gallery) to potentially add a masonry layout to the <AssetList> component
_ Check https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/

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
    ext: 'jpg' | 'png' | 'webp' | 'avif' | 'gif' | 'mp4';
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
