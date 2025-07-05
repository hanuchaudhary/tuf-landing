"use client";

import { IconAi, IconCheck, IconSettingsBolt } from "@tabler/icons-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientButton } from "./ui/GradientButton";

interface ComparisonFeature {
  id: string;
  name: string;
  tufFree: string;
  tufPremium: string;
  otherPlatforms: string;
}

interface DetailedFeature {
  id: string;
  name: string;
  tufDescription: string;
  otherPlatformsDescription: string;
}

const detailedFeatures: DetailedFeature[] = [
  {
    id: "content-organization",
    name: "Content Organization",
    tufDescription:
      "Everything you need in one place! Focused, consistent, distraction-free",
    otherPlatformsDescription:
      "Content is scattered and inconsistent across platforms - causes distractions.",
  },
  {
    id: "dsa-videos",
    name: "DSA Videos",
    tufDescription:
      "Basic DSA is freshly recorded with user feedback. Advanced topics are exclusive to TUF+. Selected YouTube videos are reused, trimmed and refined for clarity and efficiency.",
    otherPlatformsDescription:
      "DSA on YouTube lacks advanced topics like recursion, strings, and heaps.",
  },
  {
    id: "practice-problems",
    name: "Practice Problems and Blogs",
    tufDescription:
      "TUF+ offers a complete, structured problem set with aligned practice, time complexity analysis, and AI code reviews, built to prep you fully for interviews.",
    otherPlatformsDescription:
      "Popular sheets like A2Z, SDE, and 79 miss basic problems, and practice/blogs often don't align with videos.",
  },
  {
    id: "topic-contests",
    name: "Topic Contests",
    tufDescription:
      "Topic-specific contests are available to help you practice under real-time pressure and evaluate your understanding.",
    otherPlatformsDescription:
      "Contest support is exclusively provided for TUF+ users",
  },
  {
    id: "oops-content",
    name: "OOPs Content",
    tufDescription:
      "OOPs videos(recorded freshly by your own Striver), quizzes, and practice problems are inline, providing comprehensive coverage to strengthen your fundamentals.",
    otherPlatformsDescription: "OOPs support is not available",
  },
  {
    id: "interview-prep",
    name: "Interview Prep (OS, DBMS, CN)",
    tufDescription:
      "Freshly recorded videos, Quizzes, blogs, and a redefined syllabus for interviews are already available.",
    otherPlatformsDescription: "No video and quiz support",
  },
];

const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "dsa-basics",
    name: "DSA (Basics to Advanced)",
    tufFree: "✓",
    tufPremium: "Curated list of beginners with practice set",
    otherPlatforms: "✓",
  },
  {
    id: "live-content",
    name: "Live Content",
    tufFree: "✓",
    tufPremium: "Too crowded and chaotic",
    otherPlatforms: "—",
  },
  {
    id: "recorded-content",
    name: "Recorded Content",
    tufFree: "✓",
    tufPremium: "Broken down to smaller parts to save time",
    otherPlatforms: "✓",
  },
  {
    id: "dsa-pattern",
    name: "DSA (Pattern Wise)",
    tufFree: "✓",
    tufPremium: "",
    otherPlatforms: "—",
  },
  {
    id: "practice-problems",
    name: "1000+ Practice Problems",
    tufFree: "✓",
    tufPremium: "Apart from very few",
    otherPlatforms: "—",
  },
  {
    id: "customised-roadmap",
    name: "Customised Roadmap",
    tufFree: "✓",
    tufPremium: "",
    otherPlatforms: "—",
  },
];

export function CompareSection() {
  const [compareType, setCompareType] = useState<
    "TUF_FREE" | "OTHER_PLATFORMS"
  >("TUF_FREE");

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="md:text-3xl md:text-left text-xl text-center mb-10">
            Compare What You <span className="text-orange-500">Learn</span>
          </h2>

          <div className="inline-block">
            <CompareTypeSwitch
              compareType={compareType}
              setCompareType={setCompareType}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary/30 border rounded-2xl overflow-hidden"
        >
          {compareType === "TUF_FREE" ? (
            // Detailed Comparison View
            <div>
              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary border-b">
                <div className="font-semibold">Features</div>
                <div className="text-">
                  <div className="text-2xl font-semibold">TUF</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/logo.png"
                    alt="TUF Logo"
                    className="w-10 h-10 object-contain dark:invert-0 invert-[1]"
                  />
                </div>
              </div>
              <div className="divide-y">
                {detailedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral-750 transition-colors"
                  >
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {feature.otherPlatformsDescription}
                    </div>
                    <div className="text-sm leading-relaxed">
                      {feature.tufDescription}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary border-b">
                <div className="font-semibold text-lg">Features</div>
                <div className="text-center">
                  <div className="text-lg font-semibold">Other Platforms</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/logo.png"
                    alt="TUF Logo"
                    className="w-10 h-10 object-contain dark:invert-0 invert-[1]"
                  />
                </div>
              </div>

              <div className="divide-y">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-neutral-800/20 transition-colors"
                  >
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-center">
                      {feature.otherPlatforms === "✓" ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500">
                          <span className="text-sm text-white font-bold">
                            <IconCheck className="h-3 w-3" />
                          </span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xl font-bold">
                          —
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {feature.tufFree === "✓" ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            <IconCheck className="h-3 w-3" />
                          </span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xl font-bold flex-shrink-0">
                          —
                        </span>
                      )}
                      {feature.tufPremium && (
                        <span className="text-sm text-muted-foreground">
                          {feature.tufPremium}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
        <div className="flex justify-center">
          <GradientButton className="mt-8" text="Show All Features" />
        </div>
      </div>
    </div>
  );
}

const CompareTypeSwitch = ({
  compareType,
  setCompareType,
}: {
  compareType: "TUF_FREE" | "OTHER_PLATFORMS";
  setCompareType: React.Dispatch<
    React.SetStateAction<"TUF_FREE" | "OTHER_PLATFORMS">
  >;
}) => {
  const compareTypes = [
    {
      key: "TUF_FREE",
      icon: IconAi,
      label: "TUF Free",
    },
    {
      key: "OTHER_PLATFORMS",
      icon: IconSettingsBolt,
      label: "Other Platforms",
    },
  ];

  return (
    <div
      onClick={() =>
        setCompareType(
          compareType === "TUF_FREE" ? "OTHER_PLATFORMS" : "TUF_FREE"
        )
      }
      className={cn(
        "cursor-pointer relative flex h-12 rounded-full bg-secondary p-1 font-jost ring-1 ring-border"
      )}
    >
      {compareTypes.map(({ key, icon: Icon, label }) => {
        const isActive = compareType === key;
        return (
          <button
            type="button"
            key={key}
            className="relative rounded-full cursor-pointer"
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId="activeClipType"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            {
              <span
                className={cn(
                  "relative m-auto px-4 font-[500]",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            }
          </button>
        );
      })}
    </div>
  );
};
