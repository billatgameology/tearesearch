import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true
});

const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const consoleErrors = [];
page.on("console", (message) => {
  if (message.type() === "error") consoleErrors.push(message.text());
});

await page.goto("http://127.0.0.1:4321/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (overflow > 1) throw new Error(`Mobile page has ${overflow}px horizontal overflow`);

await page.locator("[data-menu-button]").click();
if (await page.locator("[data-menu-button]").getAttribute("aria-expanded") !== "true") {
  throw new Error("Mobile menu did not open");
}
await page.locator('[data-mobile-menu] a[href="#customers"]').click();

const opportunityCards = page.locator(".opportunity-card");
if (await opportunityCards.count() !== 6) throw new Error("Expected six visible opportunity cards");
if (await opportunityCards.locator("dl").count() !== 6) throw new Error("Opportunity details are not all visible");
if (await page.locator(".opportunity-grid button").count() !== 0) throw new Error("Opportunity mapping still requires a click");

await page.locator('[data-model-view="physical"]').click();
const visiblePhysicalModels = await page.locator("[data-model-card]:visible").count();
if (visiblePhysicalModels !== 3) throw new Error(`Expected 3 physical models, found ${visiblePhysicalModels}`);

if (await page.locator(".city-card").count() !== 5) throw new Error("Expected five always-visible city cards");
if (await page.locator(".city-map__marker").count() !== 5) throw new Error("Expected five labeled map markers");
if (await page.locator("#cities button").count() !== 0) throw new Error("City analysis still requires a click");
if (await page.locator(".case-item__actions a").count() !== 6) throw new Error("Prior-attempt source links are incomplete");

await page.locator('[data-scenario="65000,68,26"]').click();
const revenue = await page.locator("[data-revenue]").textContent();
if (revenue !== "$95,588") throw new Error(`Unexpected tea-house break-even result: ${revenue}`);

const downloadResponses = await Promise.all([
  page.request.get("http://127.0.0.1:4321/research/us-chinese-tea-business-report.txt"),
  page.request.get("http://127.0.0.1:4321/research/full-research-transcript.txt"),
  page.request.get("http://127.0.0.1:4321/research/five-market-study.txt"),
  page.request.get("http://127.0.0.1:4321/research/comparable-business-cases.txt")
]);
if (downloadResponses.some((response) => !response.ok())) throw new Error("A research download is unavailable");
if (await page.locator(".site-footer__links a[download]").count() !== 0) throw new Error("Footer evidence still forces a download");
if (await page.locator('.site-footer__links a[target="_blank"]').count() !== 4) throw new Error("Footer evidence does not open in a new tab");
if (consoleErrors.length) throw new Error(`Browser console errors: ${consoleErrors.join(" | ")}`);

await page.locator("[data-language-toggle]").click();
if (await page.locator("html").getAttribute("lang") !== "zh-CN") throw new Error("Chinese mode did not update the document language");
if (await page.locator("[data-language-toggle]").textContent() !== "EN") throw new Error("Language toggle did not switch to EN");
if (!(await page.locator("body").innerText()).includes("先建立公司，再建立茶馆。")) throw new Error("Chinese recommendation is missing");
const chineseOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (chineseOverflow > 1) throw new Error(`Chinese mobile page has ${chineseOverflow}px horizontal overflow`);

await page.locator("[data-language-toggle]").click();
if (!(await page.locator("body").innerText()).includes("Build the company before building the tea house.")) throw new Error("English mode did not restore content");

console.log("QA passed: bilingual responsive layout, visible opportunity/city analysis, source links, calculator and text evidence.");
await browser.close();
