import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const errors = [];
const requireMatch = (pattern, message) => {
  if (!pattern.test(html)) errors.push(message);
};

requireMatch(/^<!doctype html>/i, "Missing HTML5 doctype.");
requireMatch(/<html lang="en">/i, "The document language must be declared.");
requireMatch(/<meta name="viewport"/i, "Missing responsive viewport metadata.");
requireMatch(/<title>[^<]{10,}<\/title>/i, "Missing or too-short page title.");
requireMatch(/<meta name="description"/i, "Missing search description.");
requireMatch(/<main id="main">/i, "Missing main landmark or skip-link target.");
requireMatch(/id="enquiryForm"/i, "Missing business enquiry form.");
requireMatch(/mailto:macsurpharmaa@gmail\.com/i, "Business enquiry email link is missing.");

const h1Count = (html.match(/<h1\b/gi) || []).length;
if (h1Count !== 1) errors.push(`Expected exactly one h1, found ${h1Count}.`);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) errors.push(`Duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}.`);

const idSet = new Set(ids);
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!idSet.has(match[1])) errors.push(`Broken in-page link: #${match[1]}.`);
}

for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
  if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[1])) {
    errors.push("An image is missing its alt attribute.");
  }
}

for (const match of html.matchAll(/<a\b([^>]*)>/gi)) {
  const attrs = match[1];
  if (/target=["']_blank["']/i.test(attrs) && !/rel=["'][^"']*noopener[^"']*["']/i.test(attrs)) {
    errors.push("An external tab link is missing rel=noopener.");
  }
}

for (const file of ["favicon.svg", "robots.txt", "sitemap.xml"]) {
  if (!existsSync(file)) errors.push(`Missing website support file: ${file}.`);
}

if (errors.length) {
  console.error("Website validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Website validation passed.");
console.log(`Checked one page, ${ids.length} IDs, ${(html.match(/<a\b/gi) || []).length} links, and required support files.`);
