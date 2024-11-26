// import tagsData from './tags.json';
import fs from 'fs/promises';
import path from 'path';
import { type PathLike } from 'fs';
import { type Tag } from '../src/types/tags.types';

const TAGS_FILE = path.join(__dirname, 'tags.json');

export async function createTag(tag: string, filepath: PathLike = TAGS_FILE) {
  const data = await fs.readFile(filepath, 'utf8');
  const tags = JSON.parse(data).tags;
  const newTag = {
    id: crypto.randomUUID(),
    name: tag.toLowerCase(),
  };
  const tagAlreadyExists = tags.some((el) => el.name === newTag.name);
  if (!tagAlreadyExists) {
    tags.push(newTag);
    try {
      await fs.writeFile(filepath, JSON.stringify({ tags }, null, 2));
    } catch (error) {
      console.log('An error has occurred ', error);
    }
  } else {
    throw new Error(`Tag: ${newTag.name} already exists`);
  }
}

export async function getTagsByIds(tagIds: string[]) {
  try {
    const tagsData = await fs.readFile(TAGS_FILE, 'utf8');
    const existingTags = JSON.parse(tagsData);
    const tags: string[] = [];
    tagIds.forEach((id: string) => {
      existingTags.forEach((tag: Tag) => {
        return id === tag.id ? tags.push(tag.name) : false;
      });
    });
    return tags;
  } catch (error) {
    console.log('An error has occurred ', error);
  }
}
