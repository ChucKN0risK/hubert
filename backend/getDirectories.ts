import fs from "fs";
import path from "path";

const baseDirectory =
  "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/";

const nodesToExclude = ["Assets.library", ".DS_Store"];

class TreeNode {
  public id: string;
  public path: string;
  public size?: number;
  public dateModified?: Date;
  public children: Array<TreeNode>;

  constructor(path: string, size?: number, dateModified?: Date) {
    this.id = crypto.randomUUID();
    this.path = path;
    this.size = size;
    this.dateModified = dateModified;
    this.children = [];
  }
}

function generateDataFile(content: TreeNode) {
  try {
    fs.writeFileSync(
      path.join(__dirname, "data.json"),
      JSON.stringify(content)
    );
    // file written successfully
  } catch (err) {
    console.error(err);
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
        if (!nodesToExclude.includes(child)) {
          const childPath = `${currentNode.path}/${child}`;
          const childSize = fs.statSync(childPath).size;
          const childDateModified = fs.statSync(childPath).mtime;
          const childNode = new TreeNode(
            childPath,
            childSize,
            childDateModified
          );
          currentNode.children.push(childNode);

          if (fs.statSync(childNode.path).isDirectory()) {
            stack.push(childNode);
          }
        }
      }
    }
  }

  console.log(root);

  generateDataFile(root);

  return root;
}

buildTree(baseDirectory);
