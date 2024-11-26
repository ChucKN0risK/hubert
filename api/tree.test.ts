import path from 'path';
import { describe, test, expect } from 'vitest';
import { buildTree } from './directoryManager';

describe('buildTree', () => {
  const initialPath = path.join(__dirname, 'test-directory');
  // const initialPath =
  //   '/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎';

  test('should return root node', () => {
    const rootNode = buildTree(initialPath);
    expect(rootNode).not.toBeNull();
    expect(rootNode).toHaveProperty('path', initialPath);
    expect(rootNode).toHaveProperty('children');
  });

  test('should return root node with its exact 6 children', () => {
    const rootNode = buildTree(initialPath);
    expect(rootNode.children.length).toEqual(6);

    const childrenPath = rootNode.children.map((child) => child.path);
    expect(childrenPath.includes(`${initialPath}/AI`)).toEqual(true);
    expect(childrenPath.includes(`${initialPath}/bem-naming.svg`)).toEqual(
      true
    );
    expect(
      childrenPath.includes(`${initialPath}/choosing-the-right-graph.jpg`)
    ).toEqual(true);
    expect(
      childrenPath.includes(
        `${initialPath}/circles_conference_homepage_screenshot.png`
      )
    ).toEqual(true);
    expect(
      childrenPath.includes(
        `${initialPath}/frame.io-fluid-ui-responsive-ui.mp4`
      )
    ).toEqual(true);
    expect(
      childrenPath.includes(
        `${initialPath}/steve_dodier_lozaro-automating-design-token-migrations-with-codemods.pdf`
      )
    ).toEqual(true);
  });

  test('should add AI node with its children inside root', () => {
    const rootNode = buildTree(initialPath);
    const utils = rootNode.children.find(
      (child) => child.path === `${initialPath}/AI`
    );

    expect(utils).not.toBeNull();
    expect(utils?.children.length).toEqual(2);
    expect(utils?.children[0]?.path).toEqual(`${initialPath}/AI/jan.jpg`);
  });
});
