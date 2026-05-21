import { rm } from "node:fs/promises";

const targets = [".next", "next-dist", "tsconfig.tsbuildinfo"];

for (const target of targets) {
  try {
    await rm(target, { recursive: true, force: true });
    console.log(`[clean-next] removed: ${target}`);
  } catch (error) {
    console.warn(`[clean-next] skip: ${target}`, error);
  }
}
