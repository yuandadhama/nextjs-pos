import { motion } from "motion/react";
import Image from "next/image";

type props = {
  clickingMenuHandle: () => void;
};
const CloseMenu = ({ clickingMenuHandle }: props) => {
  return (
    <motion.button
      initial={{
        opacity: 0.2,
        x: 8,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "backInOut",
      }}
      className="mt-5 float-end mr-4 cursor-pointer"
      onClick={clickingMenuHandle}
    >
      <Image
        width={20}
        height={20}
        src={"/header/close.png"}
        alt="Close Navigation"
      />
    </motion.button>
  );
};

export default CloseMenu;
