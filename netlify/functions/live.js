const path = require("path");
const fs = require("fs");

// percorso corretto per la cartella frames nella root del repo
const FRAMES_DIR = path.join(__dirname, "../../frames");

let frames = fs.readdirSync(FRAMES_DIR)
  .sort()
  .map(f => fs.readFileSync(path.join(FRAMES_DIR, f), "utf8"));

exports.handler = async () => {
  const frame = frames[Math.floor(Math.random() * frames.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: "\x1b[2J\x1b[H" + frame
  };
};
