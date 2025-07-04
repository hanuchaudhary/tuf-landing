import React from "react";
import { AnimatedTabs, Tab } from "./ui/animated-tabs";

interface CourseCardProps {
  title: string;
  description: string;
  topics: string;
  contests: string;
  problems: string;
  icon: React.ReactNode;
}

function CourseCard({
  title,
  description,
  topics,
  contests,
  problems,
  icon,
}: CourseCardProps) {
  return (
    <div className="rounded-3xl shadow-sm ring ring-border p-6 border-[8px] border-border/50 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>{topics}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>{contests}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>{problems}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-6">
        <div className="text-6xl mb-4">{icon}</div>
      </div>

      <div className="mt-auto">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition-colors">
          View Syllabus
        </button>
      </div>
    </div>
  );
}

export function TabsSection() {
  const tabs: Tab[] = [
    {
      id: "dsa",
      label: "DSA",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="DSA"
            description="Designed for beginners as well as experts to prepare DSA"
            topics="19+ Topics"
            contests="16+ Contests"
            problems="473+ Problems"
            icon={<div className="text-white">📦</div>}
          />
          <CourseCard
            title="DSA (Concept Revision)"
            description="Suitable for people looking to study concepts for similar kind of problems"
            topics="40+ Topics"
            contests=""
            problems="199+ Problems"
            icon={<div className="text-white">💡</div>}
          />
          <CourseCard
            title="DSA (Quick Revision)"
            description="Suitable to bump up your last moment confidence with quick revision"
            topics="10+ Topics"
            contests=""
            problems="79+ Problems"
            icon={<div className="text-white">📋</div>}
          />
        </div>
      ),
    },
    {
      id: "premium",
      label: "Premium",
      isNew: true,
      content: (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Premium Content</h3>
          <p className="text-neutral-400">
            Access exclusive premium courses and content
          </p>
        </div>
      ),
    },
    {
      id: "core-subjects",
      label: "Core Subjects",
      content: (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Core Subjects</h3>
          <p className="text-neutral-400">
            Master fundamental computer science subjects
          </p>
        </div>
      ),
    },
    {
      id: "system-design",
      label: "System Design",
      isNew: true,
      content: (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">System Design</h3>
          <p className="text-neutral-400">
            Learn to design scalable systems and architectures
          </p>
        </div>
      ),
    },
    {
      id: "aptitude",
      label: "Aptitude",
      isNew: true,
      content: (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Aptitude</h3>
          <p className="text-neutral-400">
            Improve your quantitative and logical reasoning skills
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 my-32">
      <h2 className="md:text-3xl md:text-left text-xl text-center mb-10">
        Everything you need to{" "}
        <span className="text-orange-500 ">Crack Interview</span>
      </h2>
      <div className="flex justify-center">
        <AnimatedTabs tabs={tabs} className="w-full max-w-none" />
      </div>
    </div>
  );
}
