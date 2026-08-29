import { chromium } from "playwright-core";
import fs from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve(".qa");
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true
});

const targets = [
  { name: "mobile-hero", viewport: { width: 390, height: 844 }, hash: "" },
  { name: "mobile-market", viewport: { width: 390, height: 844 }, hash: "#market" },
  { name: "mobile-customers", viewport: { width: 390, height: 844 }, hash: "#customers" },
  { name: "mobile-models", viewport: { width: 390, height: 844 }, hash: "#models" },
  { name: "mobile-cities", viewport: { width: 390, height: 844 }, hash: "#cities" },
  { name: "mobile-evidence", viewport: { width: 390, height: 844 }, hash: "#evidence" },
  { name: "mobile-la", viewport: { width: 390, height: 844 }, hash: "#los-angeles" },
  { name: "mobile-recommendation", viewport: { width: 390, height: 844 }, hash: "#recommendation" },
  { name: "mobile-research-files", viewport: { width: 390, height: 844 }, hash: "#research-files" },
  { name: "desktop-hero", viewport: { width: 1440, height: 1000 }, hash: "" },
  { name: "zh-mobile-hero", viewport: { width: 390, height: 844 }, hash: "", language: "zh" },
  { name: "zh-mobile-models", viewport: { width: 390, height: 844 }, hash: "#models", language: "zh" },
  { name: "zh-mobile-cities", viewport: { width: 390, height: 844 }, hash: "#cities", language: "zh" },
  { name: "zh-mobile-recommendation", viewport: { width: 390, height: 844 }, hash: "#recommendation", language: "zh" },
  { name: "zh-desktop-hero", viewport: { width: 1440, height: 1000 }, hash: "", language: "zh" }
];

for (const target of targets) {
  const page = await browser.newPage({ viewport: target.viewport, deviceScaleFactor: 1 });
  if (target.language === "zh") {
    await page.addInitScript(() => localStorage.setItem("tea-research-language", "zh"));
  }
  await page.goto(`http://127.0.0.1:4321/${target.hash}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await page.screenshot({ path: path.join(outputDir, `${target.name}.png`) });
  await page.close();
}

await browser.close();
