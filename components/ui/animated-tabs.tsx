"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  isNew?: boolean;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  className?: string;
}

const AnimatedTabs = ({ tabs = [], className }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full max-w-lg flex flex-col gap-y-3", className)}>
      <div className="bg-secondary border backdrop-blur-sm p-1 pb-2 mb-4 rounded-xl overflow-x-auto scrollbar-hide md:w-fit w-full">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-3 py-1.5 cursor-pointer text-sm font-medium rounded-lg text-muted-foreground outline-none transition-colors flex items-center gap-2 whitespace-nowrap",
                activeTab === tab.id && "bg-secondary text-white"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-[rgba(17,17,17,0.82)] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm !rounded-lg"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
              {tab.isNew && (
                <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="h-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
