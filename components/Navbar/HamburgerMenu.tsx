import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <button className="cursor-pointer">
      <Image width={25} height={25} src="/navbar.png" alt="Navigation Bar" />
    </button>
  );
};

export default HamburgerMenu;
