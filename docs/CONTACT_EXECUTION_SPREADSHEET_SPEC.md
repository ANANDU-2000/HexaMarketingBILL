# 3-Day Contact Execution Spreadsheet Spec

Use this spec to build your contact tracker in Google Sheets or Excel. No CSV or sheet is provided — only the structure and usage rules.

---

## Column Definitions

| Column name | Description | Example |
|-------------|-------------|---------|
| **Company name** | Legal or trading name of the distributor | ABC Frozen Foods LLC |
| **Source** | Where you found them | Maps / LinkedIn / Facebook / Email / Referral |
| **Contact name** | Owner, GM, or decision-maker | Ahmed K. |
| **Phone / WhatsApp** | Number used for WhatsApp or call | +971 50 123 4567 |
| **Email** | Email address (if available) | ahmed@abcfrozen.ae |
| **Date contacted** | First outreach date | 2025-02-28 |
| **Message sent** | Which script (reference only) | Script ref: First message |
| **Follow-up 1 date** | When you sent follow-up 1 | 2025-03-01 |
| **Follow-up 2 date** | When you sent follow-up 2 | 2025-03-03 |
| **Status** | Current outcome | No reply / Replied / Demo sent / Closed / Lost |
| **Notes** | Free text (objections, next step, etc.) | Asked for pricing; send Pro link |

---

## Status Values (use exactly)

- **No reply** — Sent message(s), no response yet.
- **Replied** — They replied; not yet demo or close.
- **Demo sent** — Demo login and/or walkthrough sent.
- **Closed** — Signed or paid.
- **Lost** — Declined, wrong fit, or went silent after demo.

---

## How to Use (Day 1–3)

### Day 1

1. Fill rows from **Google Maps** (distributors, wholesalers, frozen/FMCG/ice in UAE/GCC): Company name, Source = Maps, Contact/Phone/WhatsApp/Email if visible, Date contacted = today.
2. Add rows from **LinkedIn**: Source = LinkedIn; add Contact name and (if you have it) Email or Phone. Log Date contacted.
3. In **Message sent**, write the script reference: e.g. `First message (WhatsApp)` or `First message (LinkedIn)` — use the exact scripts from [GULF_GROWTH_PLAYBOOK.md](GULF_GROWTH_PLAYBOOK.md) Section 4.
4. **Target:** 50–100 new rows (companies contacted) by end of Day 1.

### Day 2

1. Add new rows from **Facebook groups**, **associations**, and **cold email**. Set Source and Date contacted.
2. For existing rows with **No reply** and first contact 24–48 hours ago: send Follow-up 1. Fill **Follow-up 1 date** = today; in Notes you can write “F-up 1 sent”.
3. **Referral:** Add any referrals from existing clients as new rows with Source = Referral.
4. **Target:** 50–80 more new contacts; 20–40 follow-ups (F-up 1) on Day 1 contacts.

### Day 3

1. Add any last new contacts.
2. For rows that had **Follow-up 1** 24–48 hours ago and still **No reply**: send Follow-up 2. Fill **Follow-up 2 date** = today.
3. For **Replied** or **Demo sent**: use the **Close message** and objection handling from the playbook. Update Status to **Demo sent** or **Closed** or **Lost** as you go.
4. Apply **urgency offer** (see playbook Section 3, Day 3) in messages where you’re closing.
5. **Target:** All Day 1 contacts have at least one follow-up by end of Day 3; statuses updated so you know how many demos and how many “Closed” or “Lost”.

---

## Where to Paste Scripts

- **First message / Follow-up 1 / Follow-up 2 / Close:** Copy from [GULF_GROWTH_PLAYBOOK.md](GULF_GROWTH_PLAYBOOK.md) Section 4. Do not paste full scripts into every cell; use the **Message sent** column to note which script you used (e.g. `First message`, `F-up 1`, `F-up 2`, `Close`) so you stay consistent and can audit later.

---

## Target Row Counts (guideline)

| Day | New contacts (rows added) | Follow-ups sent |
|-----|---------------------------|-----------------|
| 1   | 50–100                    | —               |
| 2   | 50–80                     | 20–40 (F-up 1)  |
| 3   | 0–20                      | 20–40 (F-up 2)  |

Total unique companies contacted in 3 days: **100–200 minimum** for a realistic shot at 1 close. 200–300 improves odds.

---

*End of spreadsheet spec. Build the sheet, then run the 3-day plan from the playbook.*
