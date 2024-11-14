import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TAGS_FILE = join(__dirname, 'tags.json');

const app = express();
const port = 3000;

const saveTags = async (tags) => {
  await fs.writeFile(TAGS_FILE, JSON.stringify({ tags }, null, 2));
};

// Ensure tags.json exists
try {
  await fs.access(TAGS_FILE);
} catch {
  await saveTags([]);
}

app.get('/', (req, res) => {
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
    return res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read tags' });
  }
});

app.post('/tags', async (req, res) => {
  try {
    const data = await fs.readFile(TAGS_FILE, 'utf8');
    const tags = JSON.parse(data).tags;
    const newTag = req.body.text;
    if (!tags.includes(newTag)) {
      tags.push(newTag);
      await saveTags(tags);
      res.json({ success: `${newTag} added to saved tags` });
    } else {
      return res.json({ message: 'Tag already saved' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save tag app.js' });
  }
});

app.delete('/tags', async (req, res) => {
  try {
    const data = await fs.readFile(TAGS_FILE, 'utf8');
    let tags = JSON.parse(data).tags;
    const tagToDelete = req.body.text;
    if (tags.includes(tagToDelete)) {
      tags = tags.filter((el) => el !== tagToDelete);
      await saveTags(tags);
      res.json({ success: `${tagToDelete} removed from tags` });
    } else {
      return res.json({ message: "Tag does not exist and can't be deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete tag' });
  }
});
