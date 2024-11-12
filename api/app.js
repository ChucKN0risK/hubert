import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TAGS_FILE = join(__dirname, 'tags.json');

const app = express();
const port = 3000;

// Ensure tags.json exists
try {
  await fs.access(TAGS_FILE);
} catch {
  await fs.writeFile(TAGS_FILE, JSON.stringify('{"tags": []}', null, 2));
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
// app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// API Routes
app.get('/tags', async (req, res) => {
  try {
    const data = await fs.readFile(TAGS_FILE, 'utf-8');
    return res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read tags' });
  }
});
