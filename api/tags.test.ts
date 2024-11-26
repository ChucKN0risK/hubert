import { expect, test, beforeEach, afterEach } from 'vitest';
import { createTag } from './tagManager';
import fs from 'fs/promises';
import path from 'path';

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

beforeEach(async () => {
  // Create a test JSON file before each test
  const initialData = {
    tags: [
      {
        id: crypto.randomUUID(),
        name: 'react',
      },
    ],
  };
  await writeJsonFile(TEST_FILE_PATH, initialData);
});

afterEach(async () => {
  // Clean up the test file after each test
  await fs.unlink(TEST_FILE_PATH);
});

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

test('should add tag in JSON correctly', async () => {
  const newTag = 'typescript';
  await createTag(newTag, TEST_FILE_PATH);

  const updatedData = await readJsonFile(TEST_FILE_PATH);
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

test('should throw error when adding duplicate tag', async () => {
  const duplicateTag = 'react';

  // Using expect().rejects.toThrow() to test async function that throws
  await expect(createTag(duplicateTag, TEST_FILE_PATH)).rejects.toThrow(
    'Tag: react already exists'
  );

  // Verify the file wasn't modified
  const data = await readJsonFile(TEST_FILE_PATH);
  expect(data.tags).toHaveLength(1);
  expect(data.tags[0].name).toBe('react');
});
