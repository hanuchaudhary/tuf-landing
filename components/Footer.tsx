"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
} from "lucide-react";
import { ThemeSwitcher } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <div className=" inline-block   gap-2 dark:bg-transparent bg-black py-4 px-2 rounded-md">
              <img
                src="/logo.png"
                alt="TUF Logo"
                className="w-14 object-contain"
              />
            </div>
            <p className="mb-6 text-muted-foreground">
              The best place to learn data Structures, algorithms, most asked
              coding interview questions, real interview experiences free of
              cost.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">
              Company
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Cancellation / Refund Policy
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">
              Quick Access
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Striver's DSA Sheet
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Technical Blogs
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                CS Subjects
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Striver's CP Sheet
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">
              DSA Sheets
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Striver's SDE Sheet
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Striver's A2Z DSA Playlist
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                SDE Core Sheet
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Striver's CP Sheet
              </a>
            </nav>

            <h3 className="mb-4 mt-6 text-lg font-semibold text-orange-500">
              DSA Playlist
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Array Series
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Graph Series
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                DP Series
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                LinkedList Series
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 takeUforward | All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
