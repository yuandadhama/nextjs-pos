"use client";

import { deleteCookie } from "@/src/lib/actions/action";
import Alert from "@mui/material/Alert";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PopUp = () => {
  const [isAppeared, setIsAppeared] = useState(true);

  const handleComplete = async () => {
    setIsAppeared(false);
    await deleteCookie("success-register");
  };

  return (
    <AnimatePresence>
      {isAppeared && (
        <motion.div
          initial={{
            y: -5,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "circInOut",
            duration: 0.2,
          }}
          exit={{
            opacity: 0,
            y: -5,
          }}
          className="absolute top-4"
        >
          <Alert>Account already crated, please login with your account</Alert>
          <motion.div
            initial={{
              width: "100%",
            }}
            animate={{
              width: "0%",
            }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
            onAnimationComplete={handleComplete}
            className="w-full h-0.5 bg-linear-to-r from-green-600 to-green-100"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
