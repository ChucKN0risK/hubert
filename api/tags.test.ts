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
  const initialData = { tags: ['react'] };
  await writeJsonFile(TEST_FILE_PATH, initialData);
});

afterEach(async () => {
  // Clean up the test file after each test
  await fs.unlink(TEST_FILE_PATH);
});

test('should read JSON file correctly', async () => {
  const data = await readJsonFile(TEST_FILE_PATH);
  expect(data).toEqual({ tags: ['react'] });
});

test('should update JSON file correctly', async () => {
  const newData = 'typescript';
  await createTag(['react'], TEST_FILE_PATH, newData);

  const updatedData = await readJsonFile(TEST_FILE_PATH);
  expect(updatedData).toEqual({ tags: ['react', ...[newData]] });
});
