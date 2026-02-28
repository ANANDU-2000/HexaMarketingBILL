"use client";

import { Check, X } from "lucide-react";
import { comparisonRows } from "@/content/en/pricing.data";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border mt-16">
      <table className="w-full text-left">
        <caption className="text-text-muted text-xs text-left px-4 pt-3 pb-2">
          Based on typical setups in Gulf distribution companies.
        </caption>
        <thead>
          <tr className="border-b border-border bg-surface-2">
            <th className="p-4 font-dm font-semibold text-text-primary text-base">Feature</th>
            <th className="p-4 text-text-secondary text-base">Excel / Manual</th>
            <th className="p-4 text-text-secondary text-base">Other billing apps</th>
            <th className="p-4 bg-primary/5 border-l border-primary/20 font-dm font-semibold text-primary text-base">
              HexaBill
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border hover:bg-surface-2/50 transition-colors"
            >
              <td className="p-4 text-text-primary text-base">{row.feature}</td>
              <td className="p-4">
                {row.excel === false ? (
                  <X className="w-5 h-5 text-red inline" />
                ) : (
                  <span className="text-text-secondary text-base">
                    {String(row.excel)}
                  </span>
                )}
              </td>
              <td className="p-4">
                {row.busy === false ? (
                  <X className="w-5 h-5 text-red inline" />
                ) : (
                  <span className="text-text-secondary text-base">
                    {String(row.busy)}
                  </span>
                )}
              </td>
              <td className="p-4 bg-primary/5 border-l border-primary/20">
                {row.hexabill === true ? (
                  <Check className="w-5 h-5 text-green inline" />
                ) : (
                  <span className="text-green font-dm font-medium text-base">
                    {String(row.hexabill)}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
