import { AssetItem } from '../types/tree';

export function mergeTreeNodes(
  oldTree: AssetItem,
  newTree: AssetItem
): AssetItem {
  function mergeNodes(oldNode: AssetItem, newNode: AssetItem): AssetItem {
    // If IDs match, merge while preserving the ID
    if (oldNode.id === newNode.id) {
      const mergedChildren: AssetItem[] = [];
      const oldChildrenMap = new Map(
        oldNode.children.map((child) => [child.id, child])
      );
      const newChildrenMap = new Map(
        newNode.children.map((child) => [child.id, child])
      );

      // Handle existing/updated children
      oldChildrenMap.forEach((oldChild, id) => {
        const newChild = newChildrenMap.get(id);
        if (newChild) {
          // Child exists in both trees - merge recursively
          mergedChildren.push(mergeNodes(oldChild, newChild));
        }
      });

      // Handle new children
      newChildrenMap.forEach((newChild, id) => {
        if (!oldChildrenMap.has(id)) {
          // Child only exists in new tree - add it
          mergedChildren.push(newChild);
        }
      });

      return {
        ...newNode,
        id: oldNode.id, // Preserve the original ID
        children: mergedChildren,
      };
    }

    // If IDs don't match, return the new node
    return newNode;
  }

  return mergeNodes(oldTree, newTree);
}

// Helper function to verify merged tree integrity
export function verifyTreeIntegrity(tree: AssetItem): boolean {
  const seenIds = new Set<string>();

  function checkNode(node: AssetItem): boolean {
    if (seenIds.has(node.id)) {
      return false; // Duplicate ID found
    }
    seenIds.add(node.id);

    return node.children.every((child) => {
      // Verify path consistency
      if (!child.path.startsWith(node.path ? node.path + '/' : '')) {
        return false;
      }
      return checkNode(child);
    });
  }

  return checkNode(tree);
}
