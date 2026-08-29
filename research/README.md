# Chinese Tea U.S. Market Research

**Current evidence cutoff:** August 28, 2026
**Business assumption:** A Chinese-founded U.S. LLC selling premium Chinese tea, guided experiences, take-home tea, gifting and related services.

## Start here

1. [Five-city market comparison](five_city_market_comparison.md) — concise decision guide, test sequence, price evidence, city roles, shared gates and comparison cautions.
2. [Website data JSON](city_market_comparison.json) — structured city, decision, geography, price, score, risk and source fields for development.
3. Read the relevant city report before publishing a claim or planning a pilot:
   - [Los Angeles / San Gabriel Valley](la_sgv_market_research.md)
   - [San Francisco Bay Area](sf_bay_area_market_research.md)
   - [Seattle / Eastside](seattle_market_research.md)
   - [Austin](austin_market_research.md)
   - [New York City](nyc_market_research.md)

The current cross-city decision is: **run paid validation; do not sign a permanent lease in any city yet**.

## What each deliverable is for

| File | Use |
|---|---|
| [five_city_market_comparison.md](five_city_market_comparison.md) | Human-readable website/editorial starting point |
| [city_market_comparison.json](city_market_comparison.json) | Machine-readable content layer; preserves observed versus proposed prices |
| [la_sgv_market_research.md](la_sgv_market_research.md) | Full LA/SGV evidence, score model, competitors, rents, channels, compliance and pilot |
| [sf_bay_area_market_research.md](sf_bay_area_market_research.md) | Full SF/East Bay/South Bay evidence and pilot |
| [seattle_market_research.md](seattle_market_research.md) | Full Seattle/Eastside evidence and pilot |
| [austin_market_research.md](austin_market_research.md) | Full Austin evidence and event-first pilot |
| [nyc_market_research.md](nyc_market_research.md) | Full 12-neighborhood NYC evidence and pilot |
| [us_chinese_tea_business_research.txt](us_chinese_tea_business_research.txt) | Plain-text general business-model research |
| [us_chinese_tea_business_research_report.md](us_chinese_tea_business_research_report.md) | General strategy, operating model, illustrative economics and validation design |
| [tea company failures.md](tea%20company%20failures.md) | Durable-model, closure, contraction and failure-pattern research |
| [top 5 locations.md](top%205%20locations.md) | Earlier directional shortlist; use the newer comparison and city reports for current decisions |

## Evidence contract

Every website claim should retain one of these labels in its source data or editorial notes:

- **Measured fact:** a published government, operator or institutional number.
- **Observed market evidence:** a public current price, format, status, opening, closure or operating practice.
- **Inference:** a conclusion drawn from multiple observations; it is not a measured outcome.
- **Proposed test:** a price, hurdle, format or experiment for this company; it is not an industry benchmark.

Private competitors rarely publish revenue, profit, rent burden, traffic, acquisition cost or retention. Continued operation is evidence of durability, not profitability. A queue, sellout, visitor count, employer count or demographic proxy is not a sales forecast.

## Citation rules for the website

- Link a numeric or current-status claim to the exact original source URL carried by the city report or JSON.
- Prefer government, operator and institutional sources. Use press reporting where a primary statement is unavailable; use commercial listings only as dated examples.
- Keep the evidence cutoff visible. Recheck prices, hours, locations, wages, permits, event calendars and asking listings before publication or outreach.
- Preserve the limitations beside rent, tourism, ACS, LODES, Business Patterns and state-import data.
- Do not turn the location scores into a cross-city leaderboard. They rank candidate geographies only inside the report where they were calculated.
- Do not present proposed prices or validation gates as market facts.

## Main source families

The detailed reports use:

- 2024 ACS five-year demographic and household data;
- 2023 LODES workplace primary jobs;
- 2023 ZIP Business Patterns food-service establishment counts;
- U.S. Census state tea-import files under HS 0902;
- current official wage, permit, food-safety and transit pages;
- operator-owned menus, booking pages, location pages and event catalogs;
- dated public asking-rent examples with lease-type and site limitations;
- official visitor, institution, employer and event-channel sources.

The five city reports together contain roughly **44,000 words** and **406 distinct cited external URLs**. Counting URLs separately inside each report produces 465 report-level source references because some sources recur across cities. Source volume is not a quality score; relevance, recency, source authority and explicit limitations matter more.

## Update discipline

1. Update the relevant city report first and retain the original URL near the claim.
2. Record the new evidence date and whether the change is measured, observed, inferred or proposed.
3. Update `city_market_comparison.json` only after the report is correct.
4. Update the comparison summary last.
5. Re-run JSON parsing, Markdown table checks, excluded-scope scans and URL checks.

Suggested refresh cadence:

- prices, status, hours and event inventory: before publication and before every fieldwork round;
- wages, permits and regulations: before operating or budgeting;
- rents: rebuild from live listings and broker calls for every site shortlist;
- ACS, LODES, Business Patterns and imports: when a newer comparable release is available;
- strategic conclusions: after each paid-test cohort, not merely after new desk research.

## Legacy workbook caution

`us_chinese_tea_business_research_workbook.xlsx` predates the current scope cleanup and could not be safely edited in this workspace because the required spreadsheet-edit runtime was unavailable. **Do not ingest it into the website or treat it as a current source.** The Markdown, TXT and JSON files listed above are the current website-facing research set.
