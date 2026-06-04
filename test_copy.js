import fs from "fs";
import path from "path";

const srcProject = "/temp_repo/Home";
const destProject = "/app/applet";

const srcComp = path.join(srcProject, "src/components");
const destComp = path.join(destProject, "src/components");

const srcPublic = path.join(srcProject, "public");
const destPublic = path.join(destProject, "public");

console.log("Source components exists:", fs.existsSync(srcComp));
console.log("Source public exists:", fs.existsSync(srcPublic));

if (fs.existsSync(srcComp)) {
  fs.mkdirSync(destComp, { recursive: true });
  fs.cpSync(srcComp, destComp, { recursive: true });
  console.log("Copied components!");
}

if (fs.existsSync(srcPublic)) {
  fs.mkdirSync(destPublic, { recursive: true });
  fs.cpSync(srcPublic, destPublic, { recursive: true });
  console.log("Copied public assets!");
}
