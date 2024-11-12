// import tagsData from './tags.json';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(__dirname, 'tags.json');

export async function createTag(
  tags: string[],
  filepath: string = filePath,
  tag: string
) {
  try {
    await fs.writeFile(
      filepath,
      JSON.stringify({ tags: [...tags, tag] }, null, 2)
    );
    console.log('tag added');
  } catch (error) {
    console.log('An error has occurred ', error);
  }
}
