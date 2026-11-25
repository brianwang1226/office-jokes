// One-Line Office Jokes — make.fun bounty
// u-markk-st-one-line-office-jokes-a51f2bcc
// One line about the daily standup ritual: everyone claims "no blockers"
// while the build has been red for days and nobody dares to say it out loud.
// The joke lands because the standup is a status ritual, not a status check:
// the red build is the one blocker nobody will name, so it stays red.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 199;

const LINE =
  "Our standup is 15 minutes of everyone saying 'no blockers' while the build has been red since Tuesday and nobody wants to be the one to say it.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1 to ${MAX_CHARS} characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
