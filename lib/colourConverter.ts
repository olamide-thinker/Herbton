// Convert Hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  const hexCode = hex.replace("#", "");
  const r = parseInt(hexCode.slice(0, 2), 16);
  const g = parseInt(hexCode.slice(2, 4), 16);
  const b = parseInt(hexCode.slice(4, 6), 16);
  return [r, g, b];
}

// Convert RGB to Linear RGB
function rgbToLinear(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  const linearize = (c: number): number => {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return [linearize(r), linearize(g), linearize(b)];
}

// Convert Linear RGB to XYZ
function rgbToXyz(r: number, g: number, b: number): [number, number, number] {
  const matrix = [
    [0.4124564, 0.3575761, 0.1804375],
    [0.2126729, 0.7151522, 0.072175],
    [0.0193339, 0.119192, 0.9503041],
  ];
  return [
    matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b,
    matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b,
    matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b,
  ];
}

// Convert XYZ to OKLCH
function xyzToOklch(x: number, y: number, z: number): [number, number, number] {
  const refWhite = [0.95047, 1.0, 1.08883];
  x /= refWhite[0];
  y /= refWhite[1];
  z /= refWhite[2];

  const pivotXyz = (c: number): number =>
    c > 0.008856 ? Math.pow(c, 1 / 3) : (c * 903.3 + 16) / 116;

  const xr = pivotXyz(x);
  const yr = pivotXyz(y);
  const zr = pivotXyz(z);

  // Calculate Lightness (L*)
  const L = 116 * yr - 16;
  // Calculate Chroma (C) and Hue (H)
  const C = Math.sqrt(Math.pow(xr - yr, 2) + Math.pow(yr - zr, 2));
  const H = Math.atan2(yr - zr, xr - yr);
  const HDeg = (H * 180) / Math.PI;

  return [L, C, (HDeg + 360) % 360]; // H will be normalized to [0, 360]
}

// Convert Hex to OKLCH
function hexToOklch(hex: string): [number, number, number] {
  const [r, g, b] = hexToRgb(hex);
  const [lr, lg, lb] = rgbToLinear(r, g, b);
  const [x, y, z] = rgbToXyz(lr, lg, lb);
  return xyzToOklch(x, y, z);
}

// Test with the hex color #034401
const oklch = hexToOklch("#034401");
console.log(
  `OKLCH for #034401: L = ${oklch[0]}, C = ${oklch[1]}, H = ${oklch[2]}`
);
