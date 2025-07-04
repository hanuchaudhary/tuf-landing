"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "course-content",
    name: "Course Content & Curriculum",
    faqs: [
      {
        id: "dsa-topics",
        question: "What topics are covered in the DSA course?",
        answer:
          "Our DSA course covers everything from the basics to advanced topics, including hands-on problem-solving. You'll also have access to editorial videos and contests to deepen your understanding.",
      },
      {
        id: "prerequisites",
        question: "Are there any prerequisites for enrolling in this course?",
        answer:
          "No specific prerequisites are required. Our course is designed for beginners as well as experienced programmers looking to strengthen their DSA fundamentals.",
      },
      {
        id: "content-updated",
        question: "Is the course content updated regularly?",
        answer:
          "Yes, we regularly update our course content to include the latest industry trends, new problem-solving techniques, and feedback from our community.",
      },
      {
        id: "platform-help",
        question:
          "Does your platform only provide answers, or does it also help with doubts and interview follow-ups?",
        answer:
          "We provide comprehensive support including detailed explanations, doubt resolution, and interview preparation with mock sessions and follow-up guidance.",
      },
      {
        id: "sample-lesson",
        question: "Can I get a sample lesson before purchasing?",
        answer:
          "Yes, we offer free sample lessons and a trial period so you can experience our teaching methodology before making a commitment.",
      },
    ],
  },
  {
    id: "account-management",
    name: "Account Management",
    faqs: [
      {
        id: "account-creation",
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking the 'Sign Up' button and providing your email address. We'll send you a verification link to complete the registration.",
      },
      {
        id: "password-reset",
        question: "How can I reset my password?",
        answer:
          "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you instructions to reset your password.",
      },
      {
        id: "profile-update",
        question: "Can I update my profile information?",
        answer:
          "Yes, you can update your profile information anytime by going to your account settings and modifying the required fields.",
      },
      {
        id: "account-deletion",
        question: "How do I delete my account?",
        answer:
          "You can delete your account by contacting our support team. Please note that this action is irreversible and all your data will be permanently removed.",
      },
    ],
  },
  {
    id: "course-access",
    name: "Course Access & Technical Support",
    faqs: [
      {
        id: "completion-time",
        question: "How much time will I need to complete TUF+?",
        answer:
          "The completion time varies based on your pace and prior experience. On average, dedicated students complete the course in 3-6 months with consistent daily practice.",
      },
      {
        id: "programming-languages",
        question: "What programming languages does TUF+ support?",
        answer:
          "TUF+ supports multiple programming languages including C++, Java, Python, and JavaScript. You can choose your preferred language for problem-solving.",
      },
      {
        id: "video-solutions",
        question: "Does TUF+ include video solutions?",
        answer:
          "Yes, TUF+ includes comprehensive video solutions for all problems, with detailed explanations of the approach, time complexity, and space complexity.",
      },
      {
        id: "technical-issues",
        question: "What should I do if I encounter technical issues?",
        answer:
          "If you face any technical issues, please contact our support team through the help center or email us directly. We typically respond within 24 hours.",
      },
      {
        id: "mobile-access",
        question: "Can I access the course on my mobile device?",
        answer:
          "Yes, our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops.",
      },
    ],
  },
  {
    id: "mentorship",
    name: "Mentorship & Community Support",
    faqs: [
      {
        id: "mentorship-program",
        question: "Do you offer mentorship programs?",
        answer:
          "Yes, we offer personalized mentorship programs where experienced professionals guide you through your learning journey and career preparation.",
      },
      {
        id: "community-support",
        question: "How can I connect with other students?",
        answer:
          "You can join our active community forums, Discord server, and participate in weekly discussion sessions to connect with fellow learners.",
      },
      {
        id: "doubt-resolution",
        question: "How quickly are doubts resolved?",
        answer:
          "Our community and mentors typically respond to doubts within 2-4 hours. For urgent queries, you can use our priority support feature.",
      },
      {
        id: "study-groups",
        question: "Are there study groups available?",
        answer:
          "Yes, we organize study groups based on your learning pace and schedule. You can join existing groups or create your own.",
      },
    ],
  },
  {
    id: "certification",
    name: "Certification & Completion",
    faqs: [
      {
        id: "certificate-eligibility",
        question: "How do I get a certificate?",
        answer:
          "You'll receive a certificate of completion after finishing all course modules and passing the final assessment with a minimum score of 80%.",
      },
      {
        id: "certificate-validity",
        question: "Is the certificate recognized by employers?",
        answer:
          "Our certificates are industry-recognized and accepted by many top tech companies. We also provide LinkedIn integration for easy profile updates.",
      },
      {
        id: "aptitude-preparation",
        question: "Does TUF+ include aptitude preparation?",
        answer:
          "Yes, TUF+ includes comprehensive aptitude preparation covering quantitative reasoning, logical thinking, and verbal ability sections.",
      },
      {
        id: "completion-tracking",
        question: "How can I track my progress?",
        answer:
          "Your dashboard provides detailed progress tracking including completed modules, practice problems solved, and overall completion percentage.",
      },
    ],
  },
  {
    id: "career-guidance",
    name: "Career Guidance",
    faqs: [
      {
        id: "interview-preparation",
        question: "Do you provide interview preparation?",
        answer:
          "Yes, we offer comprehensive interview preparation including mock interviews, behavioral questions, and technical interview practice sessions.",
      },
      {
        id: "job-placement",
        question: "Do you help with job placements?",
        answer:
          "We provide career guidance, resume reviews, and connect you with our partner companies for job opportunities, though we don't guarantee placements.",
      },
      {
        id: "resume-review",
        question: "Can you review my resume?",
        answer:
          "Yes, our career counselors provide detailed resume reviews and suggestions to help you create an impactful resume that stands out to employers.",
      },
      {
        id: "salary-negotiation",
        question: "Do you provide salary negotiation guidance?",
        answer:
          "Yes, we offer workshops and one-on-one sessions on salary negotiation techniques and market research to help you secure the best offers.",
      },
    ],
  },
  {
    id: "internships",
    name: "Internships & Job Assistance",
    faqs: [
      {
        id: "internship-opportunities",
        question: "Are there internship opportunities available?",
        answer:
          "We partner with various companies to provide internship opportunities for our students. These are shared through our job portal and community channels.",
      },
      {
        id: "job-referrals",
        question: "Do you provide job referrals?",
        answer:
          "Yes, we have a referral program where our alumni and partners can refer qualified candidates for open positions in their organizations.",
      },
      {
        id: "freelance-guidance",
        question: "Do you provide guidance for freelancing?",
        answer:
          "We offer specialized sessions on freelancing, including platform setup, client acquisition, and project management for students interested in freelance work.",
      },
      {
        id: "startup-support",
        question:
          "Is there support for students wanting to start their own company?",
        answer:
          "Yes, we provide entrepreneurship guidance, connect you with mentors, and offer resources for students interested in starting their own tech ventures.",
      },
    ],
  },
  {
    id: "payment",
    name: "Payment & Refunds",
    faqs: [
      {
        id: "access-duration",
        question: "How long do I have access to the course materials?",
        answer:
          "With our Pinnacle plan, you get lifetime access to all course materials including future updates. Sprint plan provides 12 months of access.",
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. International payments are also supported.",
      },
      {
        id: "refund-policy",
        question: "What is your refund policy?",
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of purchase.",
      },
      {
        id: "installment-plans",
        question: "Are there installment payment options?",
        answer:
          "Yes, we offer flexible installment plans for all our courses. You can choose to pay in 3, 6, or 12 monthly installments.",
      },
      {
        id: "group-discounts",
        question: "Do you offer group discounts?",
        answer:
          "Yes, we offer special discounts for groups of 5 or more students. Contact our sales team for customized group pricing.",
      },
    ],
  },
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("course-content");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>("dsa-topics");

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="md:text-3xl md:text-left text-xl text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="rounded-2xl sticky top-8">
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setExpandedFAQ(null);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between group",
                      activeCategory === category.id
                        ? "bg-orange-500"
                        : "text-muted-foreground hover:text-white"
                    )}
                  >
                    <span className="font-medium">{category.name}</span>
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeCategory === category.id
                          ? "rotate-90"
                          : "group-hover:rotate-90"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-2 min-w-max">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setExpandedFAQ(null);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                      activeCategory === category.id
                        ? "bg-orange-500 text-white"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-secondary/50 border rounded-2xl md:p-6 p-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    {currentCategory?.faqs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border bg-secondary rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full px-3 md:px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/80 transition-colors"
                        >
                          <span className="font-medium">
                            {faq.question}
                          </span>
                          <svg
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-200",
                              expandedFAQ === faq.id ? "rotate-180" : ""
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={
                                expandedFAQ === faq.id
                                  ? "M19 9l-7 7-7-7"
                                  : "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              }
                            />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {expandedFAQ === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 border-t bg-secondary/50">
                                <p className="text-muted-foreground leading-relaxed md:text-base text-sm">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 mx-4 md:mx-0 bg-secondary/60 border rounded-2xl p-8"
        >
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-wrap gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Still Confused?
                </h3>
                <p className="text-muted-foreground">
                  Feel free to post your queries over our WhatsApp Support
                </p>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors md:mt-0 mt-4">
              Ask Your Query
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
