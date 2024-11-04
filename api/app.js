import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/assets",
  express.static(
    "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎"
  )
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
