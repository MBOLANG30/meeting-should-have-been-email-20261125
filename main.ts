// One-line joke about a meeting that should have been an email.
// The program writes the single line to /output/entry.txt (1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The email we never sent just watched our 47-minute meeting say live what it could have said in one line — then it filed for emotional damages.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
