export interface PainCard {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  stat: string;
  statSource: string;
  hexabillFix: string;
}

export const painData: PainCard[] = [
  {
    id: 1,
    icon: "FileSpreadsheet",
    iconColor: "var(--color-red)",
    title: "Managing invoices in Excel?",
    description:
      "Manual entry, wrong formulas, and version chaos. Your team spends hours on spreadsheets instead of selling.",
    stat: "Gulf SMEs lose avg 8% revenue annually to untracked credit and errors",
    statSource: "Gulf Business Report 2024",
    hexabillFix: "One system for invoicing, VAT, and reports — no more Excel billing.",
  },
  {
    id: 2,
    icon: "Receipt",
    iconColor: "var(--color-red)",
    title: "Losing track of payments?",
    description:
      "You don't know who has paid and who hasn't. Outstanding amounts pile up and cash flow suffers.",
    stat: "Gulf distributors write off avg AED 180,000/year to bad debt",
    statSource: "Gulf Credit Management Survey 2025",
    hexabillFix: "Customer ledger and ageing report so you know exactly who owes what.",
  },
  {
    id: 3,
    icon: "Package",
    iconColor: "var(--color-orange)",
    title: "Stock mismatches?",
    description:
      "Warehouse and system never match. You discover shortages too late and oversell or short-ship customers.",
    stat: "40% of Gulf distributors have stock variance over 10% monthly",
    statSource: "Logistics ME Survey 2024",
    hexabillFix: "Automatic stock tracking, low-stock alerts, and purchase history.",
  },
];
