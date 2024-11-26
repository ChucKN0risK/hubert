// import tagsData from './tags.json';
import fs from 'fs/promises';
import path from 'path';
import { type PathLike } from 'fs';
import { type Tag } from '../src/types/tags.types';
import { type UpdateAsset } from '../src/types/assets.types';

const TAGS_FILE = path.join(__dirname, 'tags.json');

export async function readTags(filepath: PathLike = TAGS_FILE) {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    return JSON.parse(data).tags;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to read tags from file: ${error.message}`);
    }
    throw error;
  }
}

export async function writeTags(tags: Tag[], filepath: PathLike = TAGS_FILE) {
  // ToDo: ask why the tests fail when the writeFile method
  // is not wrapped in a try/catch block
  try {
    await fs.writeFile(filepath, JSON.stringify({ tags }, null, 2));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to write tags to file: ${error.message}`);
    }
    throw error;
  }
}

export async function createTag(tag: string, filepath: PathLike = TAGS_FILE) {
  const tags = await readTags(filepath);
  const newTag = {
    id: crypto.randomUUID(),
    name: tag.toLowerCase(),
  };
  const tagAlreadyExists = tags.some((el) => el.name === newTag.name);
  if (!tagAlreadyExists) {
    tags.push(newTag);
    await writeTags(tags, filepath);
  } else {
    throw new Error(`Tag: ${newTag.name} already exists`);
  }
}

export async function updateTag(
  tagId: string,
  tagUpdates: UpdateAsset,
  filepath: PathLike = TAGS_FILE
) {
  const tags = await readTags(filepath);
  const tagIndex = tags.findIndex((el) => el.id === tagId);
  if (tagIndex !== -1) {
    tags[tagIndex] = { ...tags[tagIndex], ...tagUpdates };
    await writeTags(tags, filepath);
  } else {
    throw new Error(`Tag: ${tagId} could not be updated`);
  }
}

export async function deleteTag(tagId: string, filepath: PathLike = TAGS_FILE) {
  const tags = await readTags(filepath);
  const tagAlreadyExists = tags.some((el) => el.id === tagId);
  if (tagAlreadyExists) {
    const updatedTags = tags.filter((tag) => tag.id !== tagId);
    await writeTags(updatedTags, filepath);
  } else {
    throw new Error(`Tag does not exist and can not be deleted`);
  }
}

// export async function getTagsByIds(tagIds: string[]) {
//   try {
//     const tagsData = await fs.readFile(TAGS_FILE, 'utf8');
//     const existingTags = JSON.parse(tagsData);
//     const tags: string[] = [];
//     tagIds.forEach((id: string) => {
//       existingTags.forEach((tag: Tag) => {
//         return id === tag.id ? tags.push(tag.name) : false;
//       });
//     });
//     return tags;
//   } catch (error) {
//     console.log('An error has occurred ', error);
//   }
// }
