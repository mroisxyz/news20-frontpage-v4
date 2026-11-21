import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot: string = dirname(fileURLToPath(import.meta.url));
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source: string = resolve(repoRoot, "entry.png");
const destination: string = resolve(outputDir, "entry.png");

console.error(`Ensuring output directory exists: ${outputDir}`);
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

console.error(`Copied ${source} to ${destination}`);
