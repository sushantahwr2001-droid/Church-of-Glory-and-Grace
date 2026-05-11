import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "public", "assets");

mkdirSync(outDir, { recursive: true });

const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function png(width, height, paint) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const offset = row + 1 + x * 4;
      const [r, g, b, a] = paint(x / (width - 1), y / (height - 1), x, y);
      raw[offset] = clamp(r);
      raw[offset + 1] = clamp(g);
      raw[offset + 2] = clamp(b);
      raw[offset + 3] = clamp(a ?? 255);
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

function mix(a, b, amount) {
  return a + (b - a) * amount;
}

function blend(base, over, amount) {
  return [
    mix(base[0], over[0], amount),
    mix(base[1], over[1], amount),
    mix(base[2], over[2], amount),
    255
  ];
}

function radial(x, y, cx, cy, radius) {
  const distance = Math.hypot(x - cx, y - cy);
  return Math.max(0, 1 - distance / radius);
}

function softStripe(x, y) {
  return Math.sin((x * 23 + y * 11) * Math.PI) * 0.5 + 0.5;
}

function hero(x, y) {
  const navyTop = [7, 17, 31, 255];
  const navyMid = [13, 27, 46, 255];
  const gold = [238, 180, 83, 255];
  const cream = [255, 244, 220, 255];
  let color = blend(navyTop, navyMid, y * 0.9);
  color = blend(color, gold, radial(x, y, 0.66, 0.34, 0.52) * 0.72);
  color = blend(color, cream, radial(x, y, 0.67, 0.33, 0.18) * 0.45);

  const horizon = Math.max(0, 1 - Math.abs(y - 0.62) / 0.08);
  color = blend(color, [214, 168, 79, 255], horizon * 0.2);

  const crossX = Math.abs(x - 0.66) < 0.018 && y > 0.24 && y < 0.76;
  const crossY = Math.abs(y - 0.39) < 0.018 && x > 0.57 && x < 0.75;
  if (crossX || crossY) {
    color = blend(color, [7, 17, 31, 255], 0.9);
  }

  if (y > 0.72) {
    color = blend(color, [4, 10, 18, 255], (y - 0.72) * 1.9);
  }

  const vignette =
    Math.max(0, (Math.hypot(x - 0.5, y - 0.48) - 0.34) / 0.55) +
    softStripe(x, y) * 0.025;
  return blend(color, [2, 6, 11, 255], Math.min(vignette, 0.52));
}

function prayer(x, y) {
  const base = blend([247, 239, 226, 255], [35, 35, 40, 255], y * 0.82);
  let color = blend(base, [214, 168, 79, 255], radial(x, y, 0.5, 0.25, 0.48) * 0.54);

  const candleGlow = radial(x, y, 0.18, 0.56, 0.22);
  color = blend(color, [255, 218, 139, 255], candleGlow * 0.62);
  if (Math.abs(x - 0.18) < 0.018 && y > 0.56 && y < 0.82) {
    color = blend(color, [250, 236, 204, 255], 0.72);
  }
  if (radial(x, y, 0.18, 0.52, 0.035) > 0.45) {
    color = blend(color, [255, 244, 206, 255], 0.9);
  }

  const leftHand = Math.pow((x - 0.42) / 0.12, 2) + Math.pow((y - 0.66) / 0.2, 2) < 1;
  const rightHand = Math.pow((x - 0.58) / 0.12, 2) + Math.pow((y - 0.66) / 0.2, 2) < 1;
  if (leftHand || rightHand) {
    color = blend(color, [102, 70, 44, 255], 0.62);
  }
  if (Math.abs(x - 0.5) < 0.014 && y > 0.46 && y < 0.84) {
    color = blend(color, [26, 23, 22, 255], 0.55);
  }

  return blend(color, [7, 17, 31, 255], Math.max(0, y - 0.82) * 1.8);
}

function worship(x, y) {
  let color = blend([7, 17, 31, 255], [18, 35, 55, 255], y);
  color = blend(color, [214, 168, 79, 255], radial(x, y, 0.52, 0.3, 0.55) * 0.6);
  color = blend(color, [247, 239, 226, 255], radial(x, y, 0.52, 0.28, 0.2) * 0.32);

  const crossX = Math.abs(x - 0.52) < 0.012 && y > 0.16 && y < 0.55;
  const crossY = Math.abs(y - 0.28) < 0.012 && x > 0.46 && x < 0.58;
  if (crossX || crossY) {
    color = blend(color, [5, 12, 22, 255], 0.78);
  }

  const people = [
    [0.28, 0.74, 0.06],
    [0.4, 0.78, 0.07],
    [0.61, 0.77, 0.065],
    [0.74, 0.75, 0.055]
  ];
  for (const [cx, cy, size] of people) {
    if (radial(x, y, cx, cy - size * 1.5, size * 0.72) > 0.22) {
      color = blend(color, [5, 10, 18, 255], 0.9);
    }
    if (Math.pow((x - cx) / size, 2) + Math.pow((y - cy) / (size * 1.9), 2) < 1) {
      color = blend(color, [5, 10, 18, 255], 0.92);
    }
  }

  return blend(color, [4, 8, 14, 255], Math.max(0, y - 0.84) * 1.8);
}

writeFileSync(join(outDir, "light-of-hope-hero.png"), png(1600, 1100, hero));
writeFileSync(join(outDir, "prayer-light.png"), png(1200, 900, prayer));
writeFileSync(join(outDir, "worship-light.png"), png(1200, 675, worship));
