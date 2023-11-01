export function getHexCode(r, g, b) {
  let hexCode = [];
  if (r > 255) r = 255;
  if (r < 0) r = 0;

  if (g > 255) g = 255;
  if (g < 0) g = 0;

  if (b > 255) b = 255;
  if (b < 0) b = 0;

  let rHex = r.toString(16).length < 2 ?  "0" + r.toString(16) : r.toString(16);
  let gHex = g.toString(16).length < 2 ?  "0" + g.toString(16) : g.toString(16);
  let bHex = b.toString(16).length < 2 ?  "0" + b.toString(16) : b.toString(16);

  hexCode.push(rHex, gHex, bHex);
  return hexCode.join("").toUpperCase();
}
