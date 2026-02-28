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
    icon: "AlertTriangle",
    iconColor: "var(--color-red)",
    title: "Credit Chaos: Who Owes You Money?",
    description:
      "You gave 30-day credit to 60 customers. Your accountant's Excel is always 3 days behind. You have no idea who is overdue right now.",
    stat: "Gulf SMEs lose avg 8% revenue annually to untracked credit",
    statSource: "Gulf Business Report 2024",
    hexabillFix: "Customer.PendingBalance + aging report + auto credit block",
  },
  {
    id: 2,
    icon: "Receipt",
    iconColor: "var(--color-red)",
    title: "VAT Errors Are Costing You AED Thousands",
    description:
      "One wrong VAT calculation. FTA audit finds it. Fine arrives. Your accountant was doing it manually in Excel for 6 months.",
    stat: "FTA issued 2,300+ fines to UAE businesses in 2025",
    statSource: "FTA Annual Report 2025",
    hexabillFix: "Auto VatTotal per line. FTA-compliant PDF. VAT summary report.",
  },
  {
    id: 3,
    icon: "UserX",
    iconColor: "var(--color-red)",
    title: "Your Salesman Is Giving Free Discounts",
    description:
      "Your salesman gave 15% extra discount to his friend's shop every week for 7 months. You found out by accident. You lost AED 50,000.",
    stat: "80% of Gulf distributor fraud involves unauthorized discounts",
    statSource: "Gulf SME Fraud Report 2024",
    hexabillFix: "Staff discount limit. Audit log OldValues/NewValues. Route scope.",
  },
  {
    id: 4,
    icon: "Package",
    iconColor: "var(--color-orange)",
    title: "Your Stock Count Is Always Wrong",
    description:
      "Warehouse says 200 units. System says 340. You've been overselling for 3 months. Customers are getting short-shipped.",
    stat: "40% of Gulf distributors have stock variance over 10% monthly",
    statSource: "Logistics ME Survey 2024",
    hexabillFix: "InventoryTransactions log. RowVersion atomic updates. Damage categories.",
  },
  {
    id: 5,
    icon: "Eye",
    iconColor: "var(--color-orange)",
    title: "You Are Blind to Your Own Business",
    description:
      "It's 9pm. You're at home. You have no idea if today was profitable. You don't know today's sales, what's outstanding, or what's low on stock.",
    stat: "67% of Gulf SME owners check business status via phone daily",
    statSource: "GCC Digital Business Survey 2025",
    hexabillFix: "Dashboard batch endpoint. Real-time metrics. Mobile-responsive.",
  },
  {
    id: 6,
    icon: "Building2",
    iconColor: "var(--color-orange)",
    title: "Multi-Branch = Multi-Chaos",
    description:
      "Warehouse in Sharjah. Office in Dubai. Abu Dhabi branch. Each manager has their own Excel file. You see three different versions of the truth.",
    stat: "Companies with 3+ branches lose 23% more to administrative errors",
    statSource: "McKinsey Gulf SME Study 2024",
    hexabillFix: "Multi-branch P&L. BranchStaff. RouteExpenses. Consolidated dashboard.",
  },
  {
    id: 7,
    icon: "Clock",
    iconColor: "var(--color-red)",
    title: "Slow Invoices Are Losing You Customers",
    description:
      "Your salesman hand-writes the invoice. Then copies to WhatsApp. Customer waits 25 minutes for a bill. They're already looking at your competitor.",
    stat: "Fast invoicing reduces customer drop-off by 34% in B2B sales",
    statSource: "B2B Sales Efficiency Report 2024",
    hexabillFix: "Invoice create + QuestPDF instant generation. Held invoices for POS.",
  },
  {
    id: 8,
    icon: "TrendingDown",
    iconColor: "var(--color-red)",
    title: "Bad Debt Is Destroying Your Cash Flow",
    description:
      "You gave AED 120,000 credit to one big customer. He stopped answering calls. You have no legal paper trail. The money is gone.",
    stat: "Gulf distributors write off avg AED 180,000/year to bad debt",
    statSource: "Gulf Credit Management Survey 2025",
    hexabillFix: "CreditLimit.CanReceiveCredit block. Aging report. Customer statement PDF.",
  },
];
