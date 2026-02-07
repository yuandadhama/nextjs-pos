"use client";

import Image from "next/image";
import LoginButton from "./LoginButton";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { AnimatePresence } from "motion/react";
import {
  Cog6ToothIcon,
  GlobeAltIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";

const menus = [
  { title: "home", href: "home", icon: <HomeIcon width={20} /> },
  { title: "features", href: "features", icon: <Cog6ToothIcon width={20} /> },
  { title: "about", href: "about", icon: <GlobeAltIcon width={20} /> },
];

const Navbar = () => {
  const [openMenuNav, setOpenMenuNav] = useState(false);

  const clickingMenuHandle = () => {
    setOpenMenuNav((prevState) => !prevState);
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    console.log("go to view id: " + id);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setOpenMenuNav(false);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="bg-background-primary w-full fixed shadow z-50 flex justify-center">
      <nav className="container max-w-5xl flex py-3 px-4 justify-between">
        {/* logo image and brand  */}
        <div className="flex items-center gap-3">
          <Image
            width={30}
            height={30}
            src={"/header/logo.png"}
            alt="Smart POS Logo"
          />
          <div className="text-md font-medium">SmartPOS</div>
        </div>

        <ul className="hidden md:flex gap-[10%] items-center w-lg justify-center">
          {menus.map(({ title, href, icon }) => (
            <li key={title} className="flex gap-1">
              <div className="link-navigation" onClick={() => goTo(href)}>
                <span>{icon}</span>
                <span>{title}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* login button and navbar  */}
        <div className="flex items-center gap-5">
          <LoginButton />
          <HamburgerMenu clickingMenuHandle={clickingMenuHandle} />
        </div>
        <AnimatePresence>
          {openMenuNav && <Menu clickingMenuHandle={clickingMenuHandle} />}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
