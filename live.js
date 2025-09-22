const fs = require("fs");
const path = require("path");

// Frames sono nella stessa cartella di live.js
const FRAMES_DIR = __dirname;

// Leggi solo file numerici (000, 001, ecc.)
let frames = fs.readdirSync(FRAMES_DIR)
  .filter(f => /^\d+$/.test(f))  // filtra solo i file dei frame
  .sort()
  .map(f => fs.readFileSync(path.join(FRAMES_DIR, f), "utf8"));

exports.handler = async () => {
  if (frames.length === 0) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: "Nessun frame trovato"
    };
  }

  const frame = frames[Math.floor(Math.random() * frames.length)];

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: "\x1b[2J\x1b[H" + frame
  };
};
