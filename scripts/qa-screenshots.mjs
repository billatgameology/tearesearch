import { chromium } from "playwright-core";
import fs from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve(".qa");
await fs.mkdir(outputDir, { recursive: true });
const siteUrl = process.env.SITE_URL ?? "http://127.0.0.1:4321/tearesearch/";

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
  { name: "mobile-market-reports", viewport: { width: 390, height: 844 }, hash: "#market-reports" },
  { name: "mobile-market-dossier", viewport: { width: 390, height: 844 }, hash: "#market-reports", selector: ".market-dossier" },
  { name: "mobile-nyc-dossier", viewport: { width: 390, height: 844 }, hash: "#market-reports", selector: ".market-dossier:nth-child(4)" },
  { name: "mobile-evidence", viewport: { width: 390, height: 844 }, hash: "#evidence" },
  { name: "mobile-recommendation", viewport: { width: 390, height: 844 }, hash: "#recommendation" },
  { name: "mobile-research-files", viewport: { width: 390, height: 844 }, hash: "#research-files" },
  { name: "desktop-hero", viewport: { width: 1440, height: 1000 }, hash: "" },
  { name: "desktop-market-reports", viewport: { width: 1440, height: 1000 }, hash: "#market-reports" },
  { name: "desktop-market-readout", viewport: { width: 1440, height: 1000 }, hash: "#market-reports", selector: ".market-readout" },
  { name: "desktop-market-dossier", viewport: { width: 1440, height: 1000 }, hash: "#market-reports", selector: ".market-dossier" },
  { name: "zh-mobile-hero", viewport: { width: 390, height: 844 }, hash: "", language: "zh" },
  { name: "zh-mobile-models", viewport: { width: 390, height: 844 }, hash: "#models", language: "zh" },
  { name: "zh-mobile-cities", viewport: { width: 390, height: 844 }, hash: "#cities", language: "zh" },
  { name: "zh-mobile-market-reports", viewport: { width: 390, height: 844 }, hash: "#market-reports", language: "zh" },
  { name: "zh-mobile-market-dossier", viewport: { width: 390, height: 844 }, hash: "#market-reports", language: "zh", selector: ".market-dossier" },
  { name: "zh-mobile-nyc-dossier", viewport: { width: 390, height: 844 }, hash: "#market-reports", language: "zh", selector: ".market-dossier:nth-child(4)" },
  { name: "zh-mobile-recommendation", viewport: { width: 390, height: 844 }, hash: "#recommendation", language: "zh" },
  { name: "zh-desktop-hero", viewport: { width: 1440, height: 1000 }, hash: "", language: "zh" }
];

const selectedName = process.argv[2];
const selectedTargets = selectedName ? targets.filter((target) => target.name === selectedName) : targets;
if (selectedName && selectedTargets.length === 0) throw new Error(`Unknown screenshot target: ${selectedName}`);

for (const target of selectedTargets) {
  const page = await browser.newPage({ viewport: target.viewport, deviceScaleFactor: 1 });
  if (target.language === "zh") {
    await page.addInitScript(() => localStorage.setItem("tea-research-language", "zh"));
  }
  await page.goto(`${siteUrl}${target.hash}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  if (target.selector) {
    const element = page.locator(target.selector).first();
    await element.scrollIntoViewIfNeeded();
    await element.evaluate((node) => node.classList.add("is-visible"));
    await page.waitForTimeout(300);
    await element.screenshot({ path: path.join(outputDir, `${target.name}.png`) });
  } else {
    await page.screenshot({ path: path.join(outputDir, `${target.name}.png`) });
  }
  await page.close();
}

await browser.close();
