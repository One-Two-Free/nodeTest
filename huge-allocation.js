const { Buffer } = require("buffer");

const b = Buffer.alloc(1e9);

setInterval(() => {
  for (let i = 0; i < b.length; i++) {
    b[i] = 0x22;
  }
}, 5000);
