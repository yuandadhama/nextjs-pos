import { useEffect } from "react";
import CloseMenu from "./CloseMenu";
import { motion } from "motion/react";
import {
  ArrowRightCircleIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { ROUTES } from "@/src/lib/routes";

type props = {
  clickingMenuHandle: () => void;
};

const menus = [
  { title: "home", href: "#home", icon: <HomeIcon width={20} /> },
  { title: "features", href: "#features", icon: <Cog6ToothIcon width={20} /> },
  { title: "about", href: "#about", icon: <GlobeAltIcon width={20} /> },
];

const container_ul = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item_a = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Menu = ({ clickingMenuHandle }: props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  });

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    clickingMenuHandle();
  };

  return (
    <motion.div
      initial={{
        x: 20,
        opacity: 0.2,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: 20,
        opacity: 0.2,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full h-screen absolute top-0 left-0 backdrop-blur-sm z-50 overflow-hidden"
    >
      <div className="absolute w-60 h-screen bg-background-primary shadow-2xl shadow-black right-0">
        {/* close navigation button */}
        <CloseMenu clickingMenuHandle={clickingMenuHandle} />
        <div className="p-5 mt-10 flex flex-col justify-between h-[90%]">
          <div>
            <h4 className="text-center mb-4 text-brand font-bold">M E N U</h4>
            <motion.ul
              className="flex flex-col"
              variants={container_ul}
              initial="hidden"
              animate="visible"
            >
              {menus.map(({ title, icon }, index) => (
                <motion.li
                  variants={item_a}
                  className={`${index == menus.length - 1 ? "border-y" : "border-t"} border-t p-3`}
                  key={title}
                >
                  <motion.button
                    className="link-navigation"
                    onClick={() => goTo(title)}
                  >
                    <span className="">{icon}</span>
                    <span className="">{title}</span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <Link href={ROUTES.auth.register}>
            <motion.button className="flex border-brand border bg-brand rounded-full text-white p-2 hover:opacity-70 transition-all ease-in-out cursor-pointer justify-between shadow-blue-300 shadow-lg px-4 w-full">
              <div className="px-2">Get Started</div>
              <ArrowRightCircleIcon width={20} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
