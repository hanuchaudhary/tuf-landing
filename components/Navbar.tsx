"use client";

import React from "react";
import { MenuItem, ProductItem } from "./ui/NavbarMenu";
import { ThemeSwitcher } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { StickyBanner } from "./StickyBanner";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GradientButton } from "./ui/GradientButton";

export function Navbar() {
  const [active, setActive] = React.useState<string | null>(null);
  const [bannerOpen, setBannerOpen] = React.useState(true);
  const [bannerVisible, setBannerVisible] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 19,
    minutes: 39,
    seconds: 0
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <StickyBanner
        isVisible={bannerOpen}
        onClose={() => setBannerOpen(false)}
        onVisibilityChange={setBannerVisible}
        className="bg-gradient-to-b from-orange-500 to-orange-600"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4 text-white text-xs md:text-sm">
          <span className="hidden sm:inline font-medium">Use Code "PAYDAY"</span>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-base font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs hidden sm:inline">DAYS</span>
            </div>
            <span className="text-orange-200">:</span>
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-base font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs hidden sm:inline">HOURS</span>
            </div>
            <span className="text-orange-200">:</span>
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-base font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs hidden sm:inline">MINUTES</span>
            </div>
            <span className="text-orange-200">:</span>
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-base font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs hidden sm:inline">SECONDS</span>
            </div>
          </div>
          <span className="hidden md:inline text-xs md:text-sm">
            Lifetime Access Won't Last Forever - Grab It While You Can
          </span>
          <Button size={"sm"} className="text-xs">Click Here</Button>
        </div>
      </StickyBanner>
      <nav
        className={cn(
          "py-2 flex items-center justify-between max-w-6xl mx-auto px-3 md:px-5 rounded-xl md:rounded-2xl backdrop-blur-md dark:bg-black/40 bg-white/40 border shadow-lg transition-all duration-300",
          bannerVisible ? "mt-2 md:mt-4" : "mt-2 md:mt-4"
        )}
        style={{
          transform: bannerVisible ? "translateY(0)" : "translateY(-48px)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseLeave={() => setActive(null)}
      >
        <div className="flex items-center gap-2 py-2 md:py-4 px-1 md:px-2 rounded-md">
          <img src="/logo.png" alt="TUF Logo" className="w-10 md:w-14 object-contain dark:invert-0 invert-[1]" />
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-6">
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
          title="Striver's DSA Sheet"
          href="/courses/dsa-sheet"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center"
          description="Complete DSA for interviews"
              />
              <ProductItem
          title="System Design Sheet"
          href="/courses/system-design"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop&crop=center"
          description="Design better systems"
              />
              <ProductItem
          title="Core Subjects"
          href="/courses/core-cs"
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop&crop=center"
          description="Build strong fundamentals"
              />
              <ProductItem
          title="Interview Experiences"
          href="/courses/interview-experiences"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
          description="Learn from others' journeys"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Practice">
            <div className="text-sm grid grid-cols-1 gap-4 p-4 min-w-[200px]">
              <a
                href="/practice/dsa"
                className="block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <h4 className="font-semibold text-black dark:text-white">
                  DSA Practice
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Solve coding problems
                </p>
              </a>
              <a
                href="/practice/contests"
                className="block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <h4 className="font-semibold text-black dark:text-white">
                  Contests
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Participate in coding contests
                </p>
              </a>
              <a
                href="/practice/interview"
                className="block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <h4 className="font-semibold text-black dark:text-white">
                  Interview Prep
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Practice interview questions
                </p>
              </a>
            </div>
          </MenuItem>

          <Link
            href="/about"
            className="text-muted-foreground dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            About
          </Link>

          <ThemeSwitcher />

          <div className="flex items-center gap-2">
            <GradientButton variant="orange" text="Login" size="sm" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <Button variant="orange" size="sm" className="text-xs px-2">
            Login
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
            
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-64 bg-background border-l shadow-lg p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-secondary rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-orange-500">Courses</h3>
                <div className="space-y-2 ml-4">
                  <Link href="/courses/dsa-sheet" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    Striver's DSA Sheet
                  </Link>
                  <Link href="/courses/system-design" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    System Design Sheet
                  </Link>
                  <Link href="/courses/core-cs" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    Core Subjects
                  </Link>
                  <Link href="/courses/interview-experiences" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    Interview Experiences
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-orange-500">Practice</h3>
                <div className="space-y-2 ml-4">
                  <Link href="/practice/dsa" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    DSA Practice
                  </Link>
                  <Link href="/practice/contests" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    Contests
                  </Link>
                  <Link href="/practice/interview" className="block py-2 text-sm hover:text-orange-500 transition-colors">
                    Interview Prep
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block py-2 font-medium hover:text-orange-500 transition-colors">
                About
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
