import express from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(
  "/assets",
  express.static("/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎")
);
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// API Routes
// Route to save directory content to JSON file
app.post("/api/save-directory", async (req, res) => {
  try {
    const { directoryContent } = req.body;

    if (!directoryContent) {
      return res.status(400).json({ error: "No directory content provided" });
    }

    // Create a directory for saving files if it doesn't exist
    const outputDir = join(__dirname, "");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = join(outputDir, 'data.json');

    fs.writeFileSync(outputPath, JSON.stringify(directoryContent, null, 2));

    res.json({
      success: true,
      message: "Directory content saved successfully",
      filePath: outputPath,
    });
  } catch (error) {
    console.error("Error saving directory content:", error);
    res.status(500).json({ error: "Failed to save directory content" });
  }
});
