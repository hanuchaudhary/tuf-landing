import React from "react";
import { Button } from "./ui/button";
import { GradientBars } from "./ui/GradientBars";
import { LiquidButton } from "./ui/liquid-glass-button";
export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-20 flex flex-col items-center">
        <div className="border font-jost shadow-sm rounded-full pl-4 py-2 pr-0.5 text-sm">
          <span>
            Trusted by over{" "}
            <span className="bg-gradient-to-r ml-2 font-semibold from-orange-600 to-orange-500 rounded-full p-1.5">
              100,000+ engineers
            </span>
          </span>
        </div>
        <div className="text-center mt-10 space-y-4 max-w-4xl">
          <h1
            className="md:text-7xl text-3xl font-[400] mx-auto flex font-jost flex-col
        "
          >
            Accelerate Your Growth
            <span>With One Premium SUBSCRIPTION.</span>
          </h1>
          <p className="md:text-lg text-sm text-neutral-400 md:max-w-2xl max-w-xs mx-auto">
            The comprehensive platform where engineers build skills, practice
            problems, and land their next big opportunity.
          </p>
        </div>
        <div className="mt-10 flex space-x-4">
          <LiquidButton className="rounded-full md:h-14 md:px-6">Explore Offerings</LiquidButton>
          <Button className="rounded-full md:h-14 md:px-6 text-primary border md:block hidden" variant={"orange"}>Buy Now</Button>
        </div>
      </div>
      <div className="absolute inset-0 dark:bg-neutral-950"></div>
      <GradientBars />
    </div>
  );
}
