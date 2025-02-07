import { type AssetItem } from '../src/types/assets.types';

interface TreeDifference {
  renamed: { id: string; oldName: string; newName: string }[];
  deleted: { id: string; path: string }[];
  added: { id: string; path: string }[];
  pathUpdated: { id: string; oldPath: string; newPath: string }[];
}

export function compareTreeNodes(
  oldTree: AssetItem,
  newTree: AssetItem
): TreeDifference {
  const result: TreeDifference = {
    renamed: [],
    deleted: [],
    added: [],
    pathUpdated: [],
  };

  function compareNodes(oldNode: AssetItem, newNode: AssetItem) {
    // Check for rename
    if (oldNode.id === newNode.id && oldNode.name !== newNode.name) {
      result.renamed.push({
        id: oldNode.id,
        oldName: oldNode.name,
        newName: newNode.name,
      });
    }

    // Check for path updates
    if (oldNode.id === newNode.id && oldNode.path !== newNode.path) {
      result.pathUpdated.push({
        id: oldNode.id,
        oldPath: oldNode.path,
        newPath: newNode.path,
      });
    }

    // Compare children
    const oldChildren = new Map(
      oldNode.children.map((child) => [child.id, child])
    );
    const newChildren = new Map(
      newNode.children.map((child) => [child.id, child])
    );

    // Find deleted nodes
    oldChildren.forEach((child, id) => {
      if (!newChildren.has(id)) {
        result.deleted.push({ id, path: child.path });
      }
    });

    // Find added nodes
    newChildren.forEach((child, id) => {
      if (!oldChildren.has(id)) {
        result.added.push({ id, path: child.path });
      }
    });

    // Recursive comparison for existing nodes
    oldChildren.forEach((oldChild, id) => {
      const newChild = newChildren.get(id);
      if (newChild) {
        compareNodes(oldChild, newChild);
      }
    });
  }

  compareNodes(oldTree, newTree);
  return result;
}
