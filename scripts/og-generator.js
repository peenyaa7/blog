import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import matter from "gray-matter";

const POSTS_DIR = "content/posts";
const HTML_TEMPLATE = "scripts/og-template.html";

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  
  // recorrer todos los directorios de posts
  const dirs = fs.readdirSync(POSTS_DIR);
  
  for (const dir of dirs) {
    
    const page = await browser.newPage();

    const postDir = path.join(POSTS_DIR, dir);
    if (!fs.statSync(postDir).isDirectory()) continue;

    const indexFiles = fs.readdirSync(postDir).filter(f => f.startsWith("index."));
    if (indexFiles.length === 0) continue;

    for (const indexFile of indexFiles) {
  
      const filepath = path.join(postDir, indexFile);
      const content = fs.readFileSync(filepath, "utf-8");
      const data = matter(content);
      
      await page.setViewport({ width: 1200, height: 630 });
      
      const htmlTemplate = fs.readFileSync(HTML_TEMPLATE, "utf-8");
      const html = htmlTemplate.replace("{{TITLE}}", data.data.title || "Sin título");
      await page.setContent(html, { waitUntil: "domcontentloaded" });
      
      const lang = indexFile.split(".").length === 3 ? indexFile.split(".")[1] : null;
      const hasLang = lang != null;
      const outputPath = path.join(postDir, hasLang ? `og-cover.${lang}.png` : `og-cover.png`);
      await page.screenshot({ path: outputPath, fullPage: false });
  
      console.log(`- Has lang -> ${hasLang ? '✅' : '❌'} | ✅ Generated OpenGraph: ${outputPath}`);
    }

  }

  await browser.close();
})();
