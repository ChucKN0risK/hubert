import { expect, test, beforeEach, afterEach, describe } from 'vitest';
import { createTag, updateTag } from './tagManager';
import fs from 'fs/promises';
import path from 'path';
import { type Tag } from '../src/types/tags.types';

const TEST_FILE_PATH = path.join(__dirname, 'test-data.json');

// Function to read JSON file
async function readJsonFile(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

// Function to write JSON file
async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

describe('Tags', () => {
  const initialTag: Tag = {
    id: crypto.randomUUID(),
    name: 'react',
  };

  beforeEach(async () => {
    // Create a test JSON file before each test
    const initialData: { tags: Tag[] } = {
      tags: [initialTag],
    };
    await writeJsonFile(TEST_FILE_PATH, initialData);
  });

  afterEach(async () => {
    // Clean up the test file after each test
    try {
      await fs.unlink(TEST_FILE_PATH);
    } catch (error) {
      // Ignore error if file doesn't exist
      console.log("Couldn't delete test tags file", error);
    }
  });

  describe('File Operations', () => {
    test('should read JSON file correctly', async () => {
      const data = await readJsonFile(TEST_FILE_PATH);
      expect(data).toEqual({
        tags: [
          {
            id: expect.any(String),
            name: 'react',
          },
        ],
      });
    });
  });

  describe('addTag', () => {
    test('should add tag in JSON correctly', async () => {
      const newTag = 'typescript';
      await createTag(newTag, TEST_FILE_PATH);

      const updatedData = await readJsonFile(TEST_FILE_PATH);
      console.log('updatedData', updatedData);

      expect(updatedData).toHaveProperty('tags');
      expect(Array.isArray(updatedData.tags)).toBe(true);
      expect(updatedData.tags).toHaveLength(2);
      expect(updatedData.tags).toEqual([
        {
          id: expect.any(String),
          name: 'react',
        },
        {
          id: expect.any(String),
          name: newTag,
        },
      ]);
    });

    test('should convert tag name to lowercase', async () => {
      const newTag = 'TypeScript';
      await createTag(newTag, TEST_FILE_PATH);

      const data = await readJsonFile(TEST_FILE_PATH);
      expect(data.tags[1].name).toBe('typescript');
    });

    test('should throw error when adding duplicate tag', async () => {
      await expect(createTag('react', TEST_FILE_PATH)).rejects.toThrow(
        'Tag: react already exists'
      );

      const data = await readJsonFile(TEST_FILE_PATH);
      expect(data.tags).toHaveLength(1);
    });
  });

  describe('updateTag', () => {
    test('should rename tag in JSON correctly', async () => {
      const data = await readJsonFile(TEST_FILE_PATH);
      const tagToUpdateId = data.tags[0].id;
      await updateTag(tagToUpdateId, { name: 'new-tag-name' }, TEST_FILE_PATH);

      const updatedData = await readJsonFile(TEST_FILE_PATH);
      console.log('updatedData', updatedData);

      expect(updatedData).toHaveProperty('tags');
      expect(Array.isArray(updatedData.tags)).toBe(true);
      expect(updatedData.tags[0]['name']).toBe('new-tag-name');
    });
  });

  // describe('deleteTag', () => {
  //   test('should delete existing tag', async () => {
  //     await deleteTag(initialTag.id, TEST_FILE_PATH);

  //     const data = await readJsonFile(TEST_FILE_PATH);
  //     expect(data.tags).toHaveLength(0);
  //   });

  //   test('should throw error when deleting non-existent tag', async () => {
  //     const nonExistentId = randomUUID();

  //     await expect(deleteTag(nonExistentId, TEST_FILE_PATH))
  //       .rejects
  //       .toThrow('Tag does not exist and can not be deleted');

  //     const data = await readJsonFile(TEST_FILE_PATH);
  //     expect(data.tags).toHaveLength(1);
  //   });
  // });
});
