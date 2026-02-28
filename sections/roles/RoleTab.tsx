"use client";

interface RoleTabItem {
  id: string;
  label: string;
}

interface RoleTabProps {
  tabs: RoleTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
}

/**
 * Clean tab switcher – text with blue underline (Google Sites–style).
 */
export function RoleTab({ tabs, activeId, onChange, ariaLabel = "Role" }: RoleTabProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-wrap gap-1 border-b border-border"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              isActive
                ? "text-primary border-primary"
                : "text-text-secondary border-transparent hover:text-primary hover:border-primary/40"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
