const frames = [
`M
`,
`MA
`,
`MAT
`,
`MATT
`,
`MATTE
`,
`MATTE 
D
`,
`MATTE DE
`,
`MATTE DEV
`
];

exports.handler = async () => {
  const frame = frames[Math.floor(Math.random() * frames.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: "\x1b[2J\x1b[H" + frame
  };
};
