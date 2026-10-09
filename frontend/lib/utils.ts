import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function quadToMatrix3d(
  w: number,
  h: number,
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number,
  x4: number, y4: number
) {
  // Maps a rectangle (0,0, w,h) to a quadrilateral (x1,y1 ... x4,y4).
  // Math based on Projective homography
  const dx1 = x2 - x3;
  const dy1 = y2 - y3;
  const dx2 = x4 - x3;
  const dy2 = y4 - y3;
  const dx3 = x1 - x2 + x3 - x4;
  const dy3 = y1 - y2 + y3 - y4;

  let a13 = 0, a23 = 0;

  if (dx3 === 0 && dy3 === 0) {
    // Affine
    return [
      (x2 - x1) / w, (y2 - y1) / w, 0, 0,
      (x4 - x1) / h, (y4 - y1) / h, 0, 0,
      0, 0, 1, 0,
      x1, y1, 0, 1
    ];
  } else {
    // Projective
    const det = dx1 * dy2 - dx2 * dy1;
    if (det === 0) return null;

    a13 = (dx3 * dy2 - dx2 * dy3) / det;
    a23 = (dx1 * dy3 - dx3 * dy1) / det;

    const a11 = (x2 - x1 + a13 * x2) / w;
    const a21 = (y2 - y1 + a13 * y2) / w;
    const a12 = (x4 - x1 + a23 * x4) / h;
    const a22 = (y4 - y1 + a23 * y4) / h;

    return [
      a11, a21, 0, a13,
      a12, a22, 0, a23,
      0, 0, 1, 0,
      x1, y1, 0, 1
    ];
  }
}
