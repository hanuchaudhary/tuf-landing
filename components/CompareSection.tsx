"use client";

import { IconAi, IconSettingsBolt } from "@tabler/icons-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    tufFree: "Yes (Curated list of beginners with practice set)",
    tufPremium: "Yes",
    otherPlatforms: "Yes",
  },
  {
    id: "live-content",
    name: "Live Content",
    tufFree: "No (Too crowded and chaotic)",
    tufPremium: "Yes",
    otherPlatforms: "Yes",
  },
  {
    id: "recorded-content",
    name: "Recorded Content",
    tufFree: "Yes (Broken down to smaller parts to save time)",
    tufPremium: "Yes",
    otherPlatforms: "Yes",
  },
  {
    id: "dsa-pattern",
    name: "DSA (Pattern Wise)",
    tufFree: "Yes",
    tufPremium: "No",
    otherPlatforms: "No",
  },
  {
    id: "practice-problems",
    name: "1000+ Practice Problems",
    tufFree: "Yes",
    tufPremium: "No (Apart from very few)",
    otherPlatforms: "No",
  },
  {
    id: "customised-roadmap",
    name: "Customised Roadmap",
    tufFree: "Yes",
    tufPremium: "No",
    otherPlatforms: "No",
  },
  {
    id: "course-platform",
    name: "Course + Platform",
    tufFree: "Yes",
    tufPremium: "No (Apart from few dead ones)",
    otherPlatforms: "No",
  },
  {
    id: "notes-downloader",
    name: "Notes Downloader to Google Docs",
    tufFree: "Yes",
    tufPremium: "No",
    otherPlatforms: "No",
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
                <div className="text-">
                  <div className="text-2xl font-semibold">
                    TUF <span className="text-orange-500">+</span>
                  </div>
                </div>
              </div>
              <div className="divide-y">
                {detailedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-750 transition-colors"
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
                <div className="font-semibold">Features</div>
                <div className="text-center">
                  <div className="text-xl">
                    TUF<span className="text-orange-500">+</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl">Other Platforms</div>
                </div>
              </div>

              <div className="divide-y">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-750 transition-colors"
                  >
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-center font-jost">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-medium",
                          feature.tufPremium === "Yes"
                            ? "bg-green-500/20 border border-green-600 text-green-500"
                            : feature.tufPremium === "No"
                            ? "bg-red-600/20 border border-red-600 text-red-500"
                            : "bg-secondary/20 border border-secondary text-muted-foreground"
                        )}
                      >
                        {feature.tufPremium}
                      </span>
                    </div>
                    <div className="text-center font-jost">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-medium",
                          feature.otherPlatforms === "Yes"
                            ? "bg-green-500/20 border border-green-600 text-green-500"
                            : feature.otherPlatforms === "No"
                            ? "bg-red-600/20 border border-red-600 text-red-500"
                            : "bg-secondary/20 border border-secondary text-muted-foreground"
                        )}
                      >
                        {feature.otherPlatforms}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Show All Features Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto">
            Show All Features
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </motion.div>
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
