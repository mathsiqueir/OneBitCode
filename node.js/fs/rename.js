const fs = require("node:fs")


fs.rename('arquivo.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });