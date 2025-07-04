"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  originalPrice: number;
  regularPrice: number;
  discountPercentage: number;
  validity: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  isPopular?: boolean;
}

interface PricingFeature {
  text: string;
  included: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "sprint",
    name: "Sprint Plan",
    subtitle: "Perfect for beginners starting their coding journey.",
    originalPrice: 8999,
    regularPrice: 6599,
    discountPercentage: 27,
    validity: "12 Months",
    features: [
      { text: "All features", included: true },
      { text: "Only DSA, Core & Aptitude", included: true },
      { text: "AI Doubt Support", included: false },
      { text: "Biweekly Sessions", included: false },
      { text: "Code Review", included: false },
    ],
    buttonText: "Buy Now @ ₹4289.35",
    buttonVariant: "outline",
  },
  {
    id: "pinnacle",
    name: "Pinnacle Plan",
    subtitle: "Go all in — with expert support & lifetime access.",
    badge: "Lifetime Validity",
    originalPrice: 11999,
    regularPrice: 9120,
    discountPercentage: 24,
    validity: "Lifetime",
    features: [
      { text: "All features", included: true },
      { text: "DSA, Core, Design & Aptitude", included: true },
      { text: "AI Doubt Support", included: true },
      { text: "Biweekly Sessions", included: true },
      { text: "Code Review", included: true },
    ],
    buttonText: "Buy Now @ ₹5928",
    buttonVariant: "primary",
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    subtitle:
      "Perfect for a group of people (minimum 30) who are looking for an extra discount.",
    features: [
      { text: "All features of Pinnacle", included: true },
      { text: "Performance Dashboard", included: true },
      { text: "Centralized Billing & Licensing", included: true },
      { text: "Custom Curriculum", included: true },
      { text: "Exclusive Webinars & Industry Events", included: true },
      { text: "Batch Enrollment & Role Access", included: true },
    ],
    buttonText: "Contact Us",
    buttonVariant: "secondary",
    originalPrice: 0,
    regularPrice: 0,
    discountPercentage: 0,
    validity: "",
  },
];

export function PricingPlans() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:text-left text-center"
        >
          <h2 className="md:text-3xl md:text-left text-xl text-center">
            Affordable Plans for{" "}
            <span className="text-orange-500"> Everyone</span>
          </h2>
          <p className="mb-4 text-muted-foreground">
            Choose the best fit for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105",
                plan.isPopular ? "border-orange-500 shadow-2xl" : ""
              )}
            >
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  {plan.name}
                </h3>
                <p className={"text-sm text-muted-foreground"}>
                  {plan.subtitle}
                </p>
              </div>

              {plan.regularPrice > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <span
                      className={cn(
                        "text-lg line-through text-muted-foreground"
                      )}
                    >
                      Original: ₹{plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={cn("text-lg")}>
                      Regular: ₹{plan.regularPrice}
                    </span>
                    <span className="bg-green-600 px-2 py-1 rounded text-sm font-medium">
                      {plan.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
              )}

              {/* Validity */}
              {plan.validity && (
                <div className="mb-6 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className={cn("text-sm")}>
                    Validity: {plan.validity}
                  </span>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h4 className={cn("font-semibold mb-4")}>What's included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + featureIndex * 0.1,
                      }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center",
                          feature.included ? "bg-green-500" : "bg-red-500"
                        )}
                      >
                        {feature.included ? (
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 text-white"
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
                        )}
                      </div>
                      <span className={cn("text-sm")}>{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300",
                  plan.buttonVariant === "primary" &&
                    "bg-orange-500 hover:bg-orange-600 text-white",
                  plan.buttonVariant === "secondary" &&
                    "bg-orange-500 hover:bg-orange-600 text-white",
                  plan.buttonVariant === "outline" &&
                    "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                )}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
