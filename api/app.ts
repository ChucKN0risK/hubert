import express from 'express';
import cors from 'cors';
import { createTag, deleteTag } from './tagManager';
import { promises as fs } from 'fs';
import { join } from 'path';

const TAGS_FILE = join(__dirname, 'tags.json');

const app = express();
const port = 3000;

// Ensure tags.json exists
(async () => {
  try {
    await fs.access(TAGS_FILE);
  } catch {
    throw new Error("tags.json file doesn't exist");
  }
})();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use(
  '/assets',
  express.static(
    '/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎'
  )
);
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// API Routes
app.get('/tags', async (_req, res) => {
  try {
    const data = await fs.readFile(TAGS_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to read tags' });
  }
});

app.post('/tags', async (req, res) => {
  try {
    await createTag(req.body.text);
    res.status(201).json({ success: `${req.body.text} added to saved tags` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save tag app.js' });
  }
});

app.delete('/tags', async (req, res) => {
  try {
    await deleteTag(req.body.tagId);
    res.status(200).json({ success: 'Tag removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete tag' });
  }
});
