"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { track } from "@/lib/analytics";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItemComponent({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => {
          onToggle();
          track.faqItemOpened(question);
        }}
        className="w-full flex items-center justify-between py-5 text-left hover:bg-surface/50 transition-colors"
      >
        <span className="font-dm font-semibold text-text-primary text-base pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border text-primary transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-0 pr-12 text-text-secondary text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
