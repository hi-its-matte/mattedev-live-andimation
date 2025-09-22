// netlify/functions/live.js
const fs = require("fs");
const path = require("path");

const FRAMES_DIR = path.join(__dirname, "../../frames");

let frames = [];
try {
  frames = fs.readdirSync(FRAMES_DIR)
    // qui togliamo il check .endsWith(".txt")
    .sort()
    .map(f => fs.readFileSync(path.join(FRAMES_DIR, f), "utf8"));
} catch (e) {
  frames = ["Nessun frame trovato."];
}

exports.handler = async () => {
  const frame = frames[Math.floor(Math.random() * frames.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: "\x1b[2J\x1b[H" + frame
  };
};

