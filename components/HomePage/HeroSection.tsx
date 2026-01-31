"use client";

import { motion } from "motion/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container max-w-4xl w-full flex flex-col items-center text-center md:flex-row md:mt-10 md:gap-10 md:px-6">
      <div>
        {/* hero section text  */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="font-extrabold text-4xl mb-5"
        >
          Streamline Your Business with Our{" "}
          <span className="text-brand">Smart POS</span>
        </motion.h1>

        {/* hero section sub text */}
        <p className="text-text-secondary px-10 mb-8">
          The all-in-one solution for modern retail and high-speed hospitality
        </p>

        {/* get started button  */}
        <button className="bg-brand text-background-primary p-4 w-75 mb-12 rounded-lg shadow-blue-300 shadow-lg cursor-pointer transition-all hover:opacity-80">
          Get Started
        </button>
      </div>

      {/* hero image / cashier image */}
      <div className="bg-brand-muted p-6 px-20 rounded-md shadow-lg mb-20 md:py-20">
        <Image
          width={300}
          height={200}
          alt="Cash Machine"
          src={"/cash-machine.png"}
        />
      </div>
    </section>
  );
};

export default HeroSection;
