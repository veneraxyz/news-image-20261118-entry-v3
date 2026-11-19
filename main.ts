// news-image-20261118 v3: copies the pre-rendered magazine-cover image to
// /output/entry.png. The image (a 1024x1024 PNG drawn offline) is held in
// the repository as entry.png; this program is stdlib-only and deterministic.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const IMAGE_NAME = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, IMAGE_NAME);
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL(`./${IMAGE_NAME}`, import.meta.url), outFile);
