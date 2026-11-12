import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Shared pieces for the generated social-preview images (opengraph-image). */

export const OG_SIZE = { width: 1200, height: 630 };

/** site palette, hard-coded: CSS variables are not available to the renderer */
export const OG_COLORS = {
  page: "#f6f5f2",
  card: "#ffffff",
  border: "rgba(23, 23, 26, 0.1)",
  fg: "#17171a",
  secondary: "#55555e",
  muted: "#66666f",
  accent: "#4f46e5",
  sun: "#ffcf33",
};

const FONT_DIR = join(
  process.cwd(),
  "node_modules/geist/dist/fonts/geist-sans",
);

/** Geist, as used on the site. Without this the renderer falls back to one regular weight. */
export async function ogFonts() {
  const [medium, bold] = await Promise.all([
    readFile(join(FONT_DIR, "Geist-Medium.ttf")),
    readFile(join(FONT_DIR, "Geist-Bold.ttf")),
  ]);
  return [
    { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Geist", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

/** Read a file from /public as a data URL the image renderer can embed. */
export async function publicImage(src: string) {
  const data = await readFile(join(process.cwd(), "public", src));
  const type = src.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${data.toString("base64")}`;
}

/** "#rrggbb" to an rgba() string, for brand tints */
export function tint(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
