"use client";

import React, { SVGProps } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyBannerProps {
  isVisible: boolean;
  onClose: () => void;
  onVisibilityChange?: (visible: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export function StickyBanner({
  className,
  children,
  isVisible,
  onClose,
  onVisibilityChange,
}: StickyBannerProps) {
  const [bannerVisible, setBannerVisible] = React.useState(isVisible);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isManuallyClosed, setIsManuallyClosed] = React.useState(false);
  const { scrollY } = useScroll();

  // Handle manual close
  const handleClose = () => {
    setIsManuallyClosed(true);
    setBannerVisible(false);
    onClose();
    onVisibilityChange?.(false);
  };

  // Handle scroll behavior
  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    // Don't auto-hide/show if manually closed
    if (isManuallyClosed || !isVisible) return;

    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const scrollThreshold = 100;

    if (scrollingDown && currentScrollY > scrollThreshold) {
      setBannerVisible(false);
      onVisibilityChange?.(false);
    } else if (scrollingUp || currentScrollY <= scrollThreshold) {
      setBannerVisible(true);
      onVisibilityChange?.(true);
    }

    setLastScrollY(currentScrollY);
  });

  // Update visibility when parent changes isVisible
  React.useEffect(() => {
    if (!isManuallyClosed) {
      setBannerVisible(isVisible);
      onVisibilityChange?.(isVisible);
    }
  }, [isVisible, isManuallyClosed, onVisibilityChange]);

  return (
    <motion.div
      className={cn(
        "z-40 flex min-h-12 w-full items-center justify-center px-4 py-2 relative",
        className
      )}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: bannerVisible ? 0 : -100,
        opacity: bannerVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}

      <motion.button
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: bannerVisible ? 1 : 0,
          opacity: bannerVisible ? 1 : 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.2,
        }}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
        onClick={handleClose}
        aria-label="Close banner"
      >
        <CloseIcon className="h-4 w-4 text-white hover:text-gray-200" />
      </motion.button>
    </motion.div>
  );
}

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
