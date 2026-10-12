import { writeFileSync } from 'node:fs'

const size = 32
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry[0] = size
entry[1] = size
entry.writeUInt16LE(1, 4)
entry.writeUInt16LE(32, 6)

const xorSize = size * size * 4
const andStride = 4
const andSize = andStride * size
const dibSize = 40 + xorSize + andSize
entry.writeUInt32LE(dibSize, 8)
entry.writeUInt32LE(6 + 16, 12)

const dib = Buffer.alloc(40)
dib.writeUInt32LE(40, 0)
dib.writeInt32LE(size, 4)
dib.writeInt32LE(size * 2, 8)
dib.writeUInt16LE(1, 12)
dib.writeUInt16LE(32, 14)

const pixels = Buffer.alloc(xorSize)
const set = (x, y, r, g, b, a = 255) => {
  const row = size - 1 - y
  const index = (row * size + x) * 4
  pixels[index] = b
  pixels[index + 1] = g
  pixels[index + 2] = r
  pixels[index + 3] = a
}

for (let y = 0; y < size; y += 1) {
  for (let x = 0; x < size; x += 1) {
    const dx = Math.abs(x - 15.5)
    const dy = Math.abs(y - 15.5)
    const edge = Math.max(dx, dy)
    if (edge > 14) set(x, y, 0, 0, 0, 0)
    else if (edge > 12.2) set(x, y, 6, 182, 212)
    else set(x, y, 15, 23, 42)
  }
}

for (let y = 9; y <= 22; y += 1) {
  set(10, y, 248, 250, 252)
  set(11, y, 248, 250, 252)
  set(20, y, 248, 250, 252)
  set(21, y, 248, 250, 252)
}
for (let x = 10; x <= 21; x += 1) {
  set(x, 15, 248, 250, 252)
  set(x, 16, 248, 250, 252)
}

writeFileSync(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([header, entry, dib, pixels, Buffer.alloc(andSize)]))
