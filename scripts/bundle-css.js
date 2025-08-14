import { bundle } from "lightningcss";
import fs from "fs/promises";

const filename = `${import.meta.dirname}/../css/index.css`;

let { code } = bundle({ filename });
let { code: minifiedCode } = bundle({ filename, minify: true });

try {
  await fs.access("build");
} catch (e) {
  await fs.mkdir("build");
}

await fs.writeFile("build/html-markdown.css", code.toString(), "utf-8");
await fs.writeFile(
  "build/html-markdown.min.css",
  minifiedCode.toString(),
  "utf-8",
);
