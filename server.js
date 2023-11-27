const express = require("express");
const fs = require("fs").promises;
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const minNumber = 1;
const maxNumber = 100;

app.post("/saveGameResult", async (req, res) => {
  const result = req.body.result;

  try {
    await fs.appendFile("game_results.txt", `${result}\n`);
    res.send("Game result saved.");
  } catch (err) {
    res.status(500).send("Failed to save the result");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
