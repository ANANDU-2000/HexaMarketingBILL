"use client";

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  /** Optional class for the tab list container */
  className?: string;
  /** Aria label for the tab list */
  ariaLabel?: string;
}

export function Tabs({
  tabs,
  activeId,
  onChange,
  className = "",
  ariaLabel = "Tabs",
}: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`flex flex-wrap gap-2 border-b border-border pb-4 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              isActive
                ? "bg-primary text-white"
                : "bg-surface border border-border text-text-secondary hover:text-primary hover:border-primary/40"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
