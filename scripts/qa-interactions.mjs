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

const siteUrl = process.env.SITE_URL ?? "http://127.0.0.1:4321/tearesearch/";
await page.goto(siteUrl, { waitUntil: "networkidle" });
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
if ((await page.locator("#cities").innerText()).includes("directional rank")) throw new Error("Legacy cross-city ranking is still published");
if (await page.locator(".market-dossier").count() !== 5) throw new Error("Expected five completed market dossiers");
if (await page.locator(".location-scorecard__rows article").count() !== 15) throw new Error("Expected fifteen visible location score rows");
if (await page.locator('.market-dossier__footer a[target="_blank"]').count() !== 5) throw new Error("Full market report links are incomplete");
if (await page.locator("#market-reports button").count() !== 0) throw new Error("Market findings should not require a click");
if (await page.locator(".market-dossier__offers small").count() !== 15) throw new Error("Price evidence classes are incomplete");
if (await page.locator(".market-dossier__offers small", { hasText: "Observed evidence" }).count() !== 8) throw new Error("Observed price labels are incorrect");
if (await page.locator(".market-dossier__offers small", { hasText: "Proposed pilot" }).count() !== 7) throw new Error("Proposed pilot labels are incorrect");
if (!(await page.locator(".market-dossier", { hasText: "Austin" }).innerText()).includes("71.5")) throw new Error("Updated Austin score is missing");
if (await page.locator(".case-item__actions a").count() !== 6) throw new Error("Prior-attempt source links are incomplete");

await page.locator('[data-scenario="65000,68,26"]').click();
const revenue = await page.locator("[data-revenue]").textContent();
if (revenue !== "$95,588") throw new Error(`Unexpected tea-house break-even result: ${revenue}`);

const textResponses = await Promise.all([
  page.request.get(`${siteUrl}research/us-chinese-tea-business-report.txt`),
  page.request.get(`${siteUrl}research/full-research-transcript.txt`),
  page.request.get(`${siteUrl}research/five-city-market-comparison.txt`),
  page.request.get(`${siteUrl}research/comparable-business-cases.txt`),
  page.request.get(`${siteUrl}research/la-sgv-market-research.txt`),
  page.request.get(`${siteUrl}research/sf-bay-area-market-research.txt`),
  page.request.get(`${siteUrl}research/seattle-market-research.txt`),
  page.request.get(`${siteUrl}research/nyc-market-research.txt`),
  page.request.get(`${siteUrl}research/austin-market-research.txt`)
]);
if (textResponses.some((response) => !response.ok())) throw new Error("A plain-text research file is unavailable");
if (await page.locator(".site-footer__links a[download]").count() !== 0) throw new Error("Footer evidence still forces a download");
if (await page.locator('.site-footer__links a[target="_blank"]').count() !== 4) throw new Error("Footer evidence does not open in a new tab");
if (consoleErrors.length) throw new Error(`Browser console errors: ${consoleErrors.join(" | ")}`);

await page.locator("[data-language-toggle]").click();
if (await page.locator("html").getAttribute("lang") !== "zh-CN") throw new Error("Chinese mode did not update the document language");
if (await page.locator("[data-language-toggle]").textContent() !== "EN") throw new Error("Language toggle did not switch to EN");
if (!(await page.locator("body").innerText()).includes("先建立公司，再建立茶馆。")) throw new Error("Chinese recommendation is missing");
if (!(await page.locator("#market-reports").innerText()).includes("五个都会区，一套决策框架")) throw new Error("Chinese market dossiers are missing");
const chineseOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (chineseOverflow > 1) throw new Error(`Chinese mobile page has ${chineseOverflow}px horizontal overflow`);

await page.locator("[data-language-toggle]").click();
if (!(await page.locator("body").innerText()).includes("Build the company before building the tea house.")) throw new Error("English mode did not restore content");

console.log("QA passed: five bilingual market dossiers, visible scorecards, responsive layout, source links, calculator and text evidence.");
await browser.close();
