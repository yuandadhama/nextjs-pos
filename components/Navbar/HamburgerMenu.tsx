import { motion } from "motion/react";
import Image from "next/image";

type props = {
  clickingMenuHandle: () => void;
};

const HamburgerMenu = ({ clickingMenuHandle }: props) => {
  return (
    <motion.button
      className="cursor-pointer md:hidden"
      onClick={clickingMenuHandle}
    >
      <Image
        width={25}
        height={25}
        src={"/header/hamburger.png"}
        alt="Navigation Bar"
      />
    </motion.button>
  );
};

export default HamburgerMenu;
