import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://127.0.0.1:4321/", { waitUntil: "networkidle" });
await page.locator("[data-language-toggle]").click();
await page.waitForTimeout(300);

const lines = (await page.locator("body").innerText())
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => /[A-Za-z]{3,}/.test(line));

console.log([...new Set(lines)].join("\n"));
await browser.close();
