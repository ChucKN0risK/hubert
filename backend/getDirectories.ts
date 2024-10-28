import fs from "fs";
// import path from "path";

// const baseDirectory =
//   "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/";

// function getDirectories(dirpath) {
//   const directoriesToExclude = ["Assets.library"];

//   const tree = {
//     id: crypto.randomUUID(),
//     name: "00. ASSETS 📎",
//     children: [],
//   };

//   const directories = fs
//     // Display the name of every child wether it's a folder or a file
//     .readdirSync(dirpath)
//     // Generate the full pathy so we can determine if the child is a folder or a file
//     .map((child) => {
//       if (
//         !directoriesToExclude.includes(child) &&
//         !filesToExclude.includes(child)
//       ) {
//         const childPath = path.join(dirpath, child);
//         const childObj = {
//           id: crypto.randomUUID(),
//           name: child,
//           path: childPath,
//         };
//         if (fs.statSync(childPath).isDirectory()) {
//           childObj.children = [];
//         }
//         tree.children.push(childObj);
//       }
//       return tree;
//     });
//   // .filter(
//   //   (pth) =>
//   //     fs.statSync(pth).isDirectory() && !directoriesToExclude.includes(pth)
//   // );

//   console.log(directories);

//   return JSON.stringify(tree);
// }

// function getDirectoriesRecursive(dirpath) {
//   return [
//     dirpath,
//     ...flatten(getDirectories(dirpath).map(getDirectoriesRecursive)),
//   ];
// }

// function flatten(arr) {
//   return arr.slice().flat();
// }

// function generateFolderTree(arr) {
//   return arr.reduce((acc, el) => {
//     // Remove baseDirectory path from folder path
//     // '/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit' -> 'Intuit'
//     const folderName = el.replace(baseDirectory, "");
//     // If folder path includes '/' it means it's a child folder
//     // We only want folders from the same level
//     if (!folderName.includes("/")) {
//       acc.push({
//         id: crypto.randomUUID(),
//         name: folderName,
//       });
//     }
//     return acc;
//   }, []);
// }

// console.log(getDirectories(`${baseDirectory}/`));
// console.log(generateFolderTree(getDirectoriesRecursive(`${baseDirectory}/`)));

const filesToExclude = [".DS_Store"];

class TreeNode {
  public id: string;
  public path: string;
  public children: Array<TreeNode>;

  constructor(path: string) {
    this.id = crypto.randomUUID();
    this.path = path;
    this.children = [];
  }
}

export function buildTree(rootPath: string) {
  const root = new TreeNode(rootPath);

  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = fs.readdirSync(currentNode.path);

      for (const child of children) {
        if (!filesToExclude.includes(child)) {
          const childPath = `${currentNode.path}/${child}`;
          const childNode = new TreeNode(childPath);
          currentNode.children.push(childNode);

          if (fs.statSync(childNode.path).isDirectory()) {
            stack.push(childNode);
          }
        }
      }
    }
  }

  console.log(root);

  return root;
}
