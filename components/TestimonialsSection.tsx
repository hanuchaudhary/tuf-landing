"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "This DSA course transformed my coding skills completely. The structured approach and practice problems helped me crack Google's interview.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Sharma",
    role: "Software Engineer at Google",
  },
  {
    text: "The placement preparation was outstanding. Got offers from Microsoft and Amazon thanks to the comprehensive mock interviews and guidance.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Arjun Patel",
    role: "SDE at Microsoft",
  },
  {
    text: "Best investment I made for my career. The instructors were supportive and the curriculum covered everything needed for top-tier placements.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sneha Gupta",
    role: "Software Developer at Meta",
  },
  {
    text: "From zero coding knowledge to landing at Netflix. The DSA fundamentals and problem-solving techniques were game-changing.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Rohit Kumar",
    role: "Software Engineer at Netflix",
  },
  {
    text: "The placement assistance was incredible. Resume reviews, mock interviews, and constant support led to my dream job at Apple.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Ananya Singh",
    role: "iOS Developer at Apple",
  },
  {
    text: "This course gave me confidence to tackle any coding interview. The practice sessions and feedback were invaluable for my success.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Kavya Reddy",
    role: "SDE at Adobe",
  },
  {
    text: "Excellent placement record speaks for itself. The mentorship and industry connections helped me secure multiple offers.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikram Malhotra",
    role: "Software Engineer at Uber",
  },
  {
    text: "The DSA course content was comprehensive and the placement support was phenomenal. Highly recommend for serious job seekers.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Riya Agarwal",
    role: "Backend Developer at Spotify",
  },
  {
    text: "Thanks to this course, I improved my problem-solving skills and landed at my dream company. The placement guidance was top-notch.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Karthik Nair",
    role: "Full Stack Developer at Airbnb",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="my-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mx-auto px-4"
      >
        <h2 className="md:text-3xl md:text-left text-xl text-center mb-10">
          What users have to say about the V3 launch of{" "}
          <span className="text-orange-500">TUF+</span>
        </h2>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </section>
  );
};
