"use client";

import React, { useState } from "react";
import { AnimatedTabs, Tab } from "./ui/animated-tabs";
import {
  IconPlus,
  IconChevronRight,
  IconFolder,
  IconFile,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface CourseCardProps {
  title: string;
  description: string;
  topics: string;
  contests: string;
  problems: string;
  icon: React.ReactNode;
  syllabusData: SyllabusItem[];
}

interface SyllabusItem {
  id: string;
  title: string;
  type: "folder" | "file";
  children?: SyllabusItem[];
}

const dsaSyllabus: SyllabusItem[] = [
  {
    id: "beginner",
    title: "Beginner Problems",
    type: "folder",
    children: [
      {
        id: "language-basics",
        title: "Language Basics",
        type: "folder",
        children: [
          { id: "variables", title: "Variables & Data Types", type: "file" },
          { id: "operators", title: "Operators", type: "file" },
          { id: "conditions", title: "Conditional Statements", type: "file" },
          { id: "loops", title: "Loops", type: "file" },
        ],
      },
      {
        id: "logic-building",
        title: "Logic Building (Patterns)",
        type: "folder",
        children: [
          { id: "easy-medium", title: "Easy and Medium", type: "file" },
          { id: "hard", title: "Hard", type: "file" },
        ],
      },
      {
        id: "patterns",
        title: "Patterns",
        type: "folder",
        children: [
          { id: "pattern1", title: "Pattern 1", type: "file" },
          { id: "pattern2", title: "Pattern 2", type: "file" },
          { id: "pattern3", title: "Pattern 3", type: "file" },
          { id: "pattern4", title: "Pattern 4", type: "file" },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate Topics",
    type: "folder",
    children: [
      { id: "arrays", title: "Arrays", type: "file" },
      { id: "strings", title: "Strings", type: "file" },
      { id: "sorting", title: "Sorting Algorithms", type: "file" },
      { id: "searching", title: "Searching Algorithms", type: "file" },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    type: "folder",
    children: [
      { id: "dp", title: "Dynamic Programming", type: "file" },
      { id: "graphs", title: "Graph Algorithms", type: "file" },
      { id: "trees", title: "Tree Algorithms", type: "file" },
    ],
  },
];

function SyllabusTree({
  items,
  level = 0,
}: {
  items: SyllabusItem[];
  level?: number;
}) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>();

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={level > 0 ? "ml-6" : ""}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="mb-2"
        >
          <motion.div
            className={`flex items-center gap-2 p-1.5 rounded hover:bg-secondary cursor-pointer transition-colors ${
              item.id === "language-basics"
                ? "bg-orange-600/20 text-orange-400"
                : ""
            }`}
            onClick={() => item.type === "folder" && toggleExpanded(item.id)}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.type === "folder" ? (
              <>
                <motion.div
                  animate={{ rotate: expandedItems?.has(item.id) ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronRight className="w-4 h-4" />
                </motion.div>
              </>
            ) : (
              <>
                <div className="w-4" />
              </>
            )}
            <span className="text-sm">{item.title}</span>
          </motion.div>

          <AnimatePresence>
            {item.type === "folder" &&
              item.children &&
              expandedItems?.has(item.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <SyllabusTree items={item.children} level={level + 1} />
                </motion.div>
              )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function CourseCard({
  title,
  description,
  topics,
  contests,
  problems,
  icon,
  syllabusData,
}: CourseCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl shadow-sm ring ring-border p-6 border-[8px] border-border/50 flex flex-col justify-between hover:shadow-lg hover:scale-105 hover:bg-secondary/50 transition-all duration-300 cursor-pointer group">
        <div className="">
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <IconPlus className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-300" />
              <span>{topics}</span>
            </div>
            {contests && (
              <div className="flex items-center gap-2">
                <IconPlus className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-300" />
                <span>{contests}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <IconPlus className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-300" />
              <span>{problems}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-6">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="w-full bg-neutral-800 hover:bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2 px-4 rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r from-orange-500 to-orange-400 group-hover:shadow-md"
          >
            View Syllabus
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="h-[80vh] flex flex-col sm:w-[700px] rounded-3xl overflow-hidden">
          <DialogHeader className="border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                <span className="font-bold text-sm uppercase">{title[0]}</span>
              </div>
              <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Complete syllabus and course structure
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto scrollbar-hide max-h-[60vh] pr-2">
            <SyllabusTree items={syllabusData} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

const conceptRevisionSyllabus: SyllabusItem[] = [
  {
    id: "fundamentals",
    title: "Programming Fundamentals",
    type: "folder",
    children: [
      { id: "basics", title: "Basic Concepts", type: "file" },
      { id: "oop", title: "Object Oriented Programming", type: "file" },
      { id: "memory", title: "Memory Management", type: "file" },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    type: "folder",
    children: [
      { id: "arrays-strings", title: "Arrays & Strings", type: "file" },
      { id: "linked-lists", title: "Linked Lists", type: "file" },
      { id: "stacks-queues", title: "Stacks & Queues", type: "file" },
      { id: "trees", title: "Trees & Graphs", type: "file" },
    ],
  },
];

const quickRevisionSyllabus: SyllabusItem[] = [
  {
    id: "quick-topics",
    title: "Quick Revision Topics",
    type: "folder",
    children: [
      { id: "time-complexity", title: "Time & Space Complexity", type: "file" },
      { id: "important-algos", title: "Important Algorithms", type: "file" },
      {
        id: "problem-patterns",
        title: "Common Problem Patterns",
        type: "file",
      },
      { id: "interview-tips", title: "Interview Tips & Tricks", type: "file" },
    ],
  },
];

const premiumSyllabus: SyllabusItem[] = [
  {
    id: "premium-courses",
    title: "Premium Courses",
    type: "folder",
    children: [
      { id: "advanced-dsa", title: "Advanced DSA", type: "file" },
      { id: "mock-interviews", title: "Mock Interviews", type: "file" },
      { id: "resume-building", title: "Resume Building", type: "file" },
      { id: "negotiation-skills", title: "Salary Negotiation", type: "file" },
    ],
  },
];

const coreSubjectsSyllabus: SyllabusItem[] = [
  {
    id: "computer-science",
    title: "Computer Science Fundamentals",
    type: "folder",
    children: [
      { id: "os", title: "Operating Systems", type: "file" },
      { id: "dbms", title: "Database Management Systems", type: "file" },
      { id: "networks", title: "Computer Networks", type: "file" },
      { id: "oops", title: "Object Oriented Programming", type: "file" },
    ],
  },
];

const systemDesignSyllabus: SyllabusItem[] = [
  {
    id: "system-design-basics",
    title: "System Design Basics",
    type: "folder",
    children: [
      { id: "scalability", title: "Scalability Principles", type: "file" },
      { id: "load-balancing", title: "Load Balancing", type: "file" },
      { id: "databases", title: "Database Design", type: "file" },
      {
        id: "microservices",
        title: "Microservices Architecture",
        type: "file",
      },
    ],
  },
];

const aptitudeSyllabus: SyllabusItem[] = [
  {
    id: "quantitative",
    title: "Quantitative Aptitude",
    type: "folder",
    children: [
      { id: "arithmetic", title: "Arithmetic", type: "file" },
      { id: "algebra", title: "Algebra", type: "file" },
      { id: "geometry", title: "Geometry", type: "file" },
      { id: "logical-reasoning", title: "Logical Reasoning", type: "file" },
    ],
  },
];

export function TabsSection() {
  const tabsSyllabusData: Tab[] = [
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
            syllabusData={dsaSyllabus}
          />
          <CourseCard
            title="DSA (Concept Revision)"
            description="Suitable for people looking to study concepts for similar kind of problems"
            topics="40+ Topics"
            contests=""
            problems="199+ Problems"
            icon={<div className="text-white">💡</div>}
            syllabusData={conceptRevisionSyllabus}
          />
          <CourseCard
            title="DSA (Quick Revision)"
            description="Suitable to bump up your last moment confidence with quick revision"
            topics="10+ Topics"
            contests=""
            problems="79+ Problems"
            icon={<div className="text-white">📋</div>}
            syllabusData={quickRevisionSyllabus}
          />
        </div>
      ),
    },
    {
      id: "premium",
      label: "Premium",
      isNew: true,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="Premium DSA+"
            description="Advanced DSA with company-specific questions and solutions"
            topics="25+ Topics"
            contests="20+ Contests"
            problems="600+ Problems"
            icon={<div className="text-white">⭐</div>}
            syllabusData={premiumSyllabus}
          />
          <CourseCard
            title="Premium Interview Kit"
            description="Complete interview preparation with mock interviews"
            topics="15+ Categories"
            contests="5+ Mock Interviews"
            problems="300+ Questions"
            icon={<div className="text-white">🎯</div>}
            syllabusData={premiumSyllabus}
          />
          <CourseCard
            title="Premium Placement Package"
            description="End-to-end placement preparation with mentorship"
            topics="All Topics"
            contests="Personal Mentor"
            problems="1000+ Problems"
            icon={<div className="text-white">🚀</div>}
            syllabusData={premiumSyllabus}
          />
        </div>
      ),
    },
    {
      id: "core-subjects",
      label: "Core Subjects",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="Operating Systems"
            description="Master OS concepts, processes, threads, and memory management"
            topics="12+ Topics"
            contests="8+ Quizzes"
            problems="150+ Questions"
            icon={<div className="text-white">💻</div>}
            syllabusData={coreSubjectsSyllabus}
          />
          <CourseCard
            title="Database Management"
            description="Learn SQL, database design, and management systems"
            topics="10+ Topics"
            contests="6+ Projects"
            problems="120+ Problems"
            icon={<div className="text-white">🗄️</div>}
            syllabusData={coreSubjectsSyllabus}
          />
          <CourseCard
            title="Computer Networks"
            description="Understand networking protocols, TCP/IP, and network security"
            topics="8+ Topics"
            contests="5+ Labs"
            problems="100+ Questions"
            icon={<div className="text-white">🌐</div>}
            syllabusData={coreSubjectsSyllabus}
          />
        </div>
      ),
    },
    {
      id: "system-design",
      label: "System Design",
      isNew: true,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="System Design Fundamentals"
            description="Learn scalability, load balancing, and distributed systems"
            topics="15+ Topics"
            contests="10+ Case Studies"
            problems="200+ Design Problems"
            icon={<div className="text-white">🏗️</div>}
            syllabusData={systemDesignSyllabus}
          />
          <CourseCard
            title="Microservices Architecture"
            description="Master microservices design patterns and best practices"
            topics="12+ Patterns"
            contests="8+ Projects"
            problems="100+ Scenarios"
            icon={<div className="text-white">🔧</div>}
            syllabusData={systemDesignSyllabus}
          />
          <CourseCard
            title="High-Level Design"
            description="Design large-scale systems like Netflix, Uber, and Twitter"
            topics="10+ Systems"
            contests="5+ Live Sessions"
            problems="50+ Designs"
            icon={<div className="text-white">🎨</div>}
            syllabusData={systemDesignSyllabus}
          />
        </div>
      ),
    },
    {
      id: "aptitude",
      label: "Aptitude",
      isNew: true,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="Quantitative Aptitude"
            description="Master arithmetic, algebra, and geometry for placements"
            topics="20+ Topics"
            contests="15+ Tests"
            problems="500+ Questions"
            icon={<div className="text-white">📊</div>}
            syllabusData={aptitudeSyllabus}
          />
          <CourseCard
            title="Logical Reasoning"
            description="Develop analytical and logical thinking skills"
            topics="12+ Categories"
            contests="10+ Puzzles"
            problems="300+ Problems"
            icon={<div className="text-white">🧠</div>}
            syllabusData={aptitudeSyllabus}
          />
          <CourseCard
            title="Verbal Ability"
            description="Improve communication and language skills"
            topics="8+ Areas"
            contests="5+ Mock Tests"
            problems="200+ Exercises"
            icon={<div className="text-white">💬</div>}
            syllabusData={aptitudeSyllabus}
          />
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
        <AnimatedTabs tabs={tabsSyllabusData} className="w-full max-w-none" />
      </div>
    </div>
  );
}
