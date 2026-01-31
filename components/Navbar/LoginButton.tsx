"use client";

import { motion } from "motion/react";

const LoginButton = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.9,
        y: 1,
      }}
      transition={{
        duration: 0.03,
        type: "spring",
      }}
      className="bg-brand rounded-lg text-background-primary cursor-pointer transition-all text-sm shadow-md px-4 py-2 shadow-blue-300 hover:opacity-80"
    >
      Login
    </motion.button>
  );
};

export default LoginButton;
