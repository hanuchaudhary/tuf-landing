"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoTab {
  id: string;
  label: string;
  subLabel?: string;
  title: string;
  videoUrl: string;
  isHighlighted?: boolean;
}

export function VideoSection() {
  const [activeTab, setActiveTab] = useState<string>("dsa-basics");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<VideoTab | null>(null);

  const videoTabs: VideoTab[] = [
    {
      id: "dsa-basics",
      label: "DSA (Basics to Advanced)",
      subLabel: "Pool of 1000+ problems to practice DSA",
      title: "Complete DSA Mastery",
      videoUrl: "/videos/V1.mp4",
    },
    {
      id: "lifetime-validity",
      label: "Lifetime Validity",
      subLabel: "Access the portal forever",
      title: "Unlimited Access",
      videoUrl: "/videos/V2.mp4",
    },
    {
      id: "personalized-roadmap",
      label: "Personalised roadmap",
      subLabel: "Create a roadmap based on your time",
      title: "Your Custom Learning Path",
      videoUrl: "/videos/V3.mp4",
    },
    {
      id: "core-subjects",
      label: "Core subjects",
      subLabel: "Learn DBMS, OS, CN from scratch",
      title: "Master Core Computer Science",
      videoUrl: "/videos/V4.mp4",
    },
    {
      id: "oops-module",
      label: "OOPs module end to end",
      subLabel: "Video, quiz, and problems for OOP",
      title: "Complete OOP Mastery",
      videoUrl: "/videos/V5.mp4",
      isHighlighted: true,
    },
    {
      id: "premium-problems",
      label: "Premium Problems",
      subLabel: "Get all premium problems here as well",
      title: "Exclusive Premium Content",
      videoUrl: "/videos/V4.mp4",
    },
  ];

  const currentTab =
    videoTabs.find((tab) => tab.id === activeTab) || videoTabs[0];

  const handleTabClick = (tab: VideoTab) => {
    setActiveTab(tab.id);
    // On mobile, open modal instead of showing inline video
    if (window.innerWidth < 768) {
      setModalVideo(tab);
      setIsVideoModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
          <h2 className="md:text-3xl md:text-left text-xl text-center mb-10">
            Explore <span className="text-orange-500">Features</span>
          </h2>
        
        <div className="flex md:flex-row flex-col gap-8 min-h-[600px]">
          <div className="space-y-4 md:w-1/2 w-full">
            {videoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`w-full text-left p-4 rounded-lg transition-all hover:border-orange-300 duration-300 ${
                  activeTab === tab.id
                    ? "bg-secondary border-l-4 border-orange-500"
                    : "bg-secondary/50 hover:bg-secondary-800"
                } ${
                  tab.isHighlighted
                    ? "border border-orange-500/50"
                    : "border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {tab.label}
                    </h3>
                    {tab.subLabel && (
                      <p className="text-muted-foreground text-sm">{tab.subLabel}</p>
                    )}
                  </div>
                  <div className="flex items-center">
                    {/* Play icon for mobile */}
                    <svg
                      className="w-5 h-5 text-orange-500 md:hidden"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {/* Arrow icon for highlighted items on desktop */}
                    {tab.isHighlighted && (
                      <svg
                        className="w-5 h-5 text-orange-500 hidden md:block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Video Player - Hidden on Mobile */}
          <div className="relative w-full hidden md:block">
            <div className="sticky top-8">
              <div className="mb-4">
                <h3 className="text-orange-500 text-lg font-semibold mb-2">
                  {currentTab.title}
                </h3>
              </div>

              <div className="relative rounded-3xl overflow-hidden ring-2 ring-secondary">
                <div className="relative z-10 p-4 border-[8px] rounded-3xl overflow-hidden">
                  <video
                    src={currentTab.videoUrl}
                    title={currentTab.title}
                    className="w-full h-full scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/80 rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  {currentTab.subLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal for Mobile */}
        <AnimatePresence>
          {isVideoModalOpen && modalVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={modalVideo.videoUrl}
                  title={modalVideo.title}
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                />
                
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {modalVideo.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {modalVideo.subLabel}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
