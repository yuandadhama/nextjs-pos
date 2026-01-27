import Image from "next/image";
import LoginButton from "./LoginButton";
import HamburgerMenu from "./HamburgerMenu";

const MenuItems = [];
const Navbar = () => {
  return (
    <nav className="w-full bg-background-primary flex py-3 px-4 justify-between fixed shadow">
      {/* logo image and brand  */}
      <div className="flex items-center gap-3">
        <Image width={30} height={30} src="/logo.png" alt="Smart POS Logo" />
        <div className="text-md font-medium">SmartPOS</div>
      </div>

      {/* login button and navbar  */}
      <div className="flex items-center gap-5">
        <LoginButton />
        <HamburgerMenu />
      </div>

      {/* <div className=" absolute top-0 right-0 opacity-55 w-60 h-screen bg-amber-400">
        close navigation button 
        <div className="mt-5 float-end mr-4.5">
          <Image
            width={20}
            height={20}
            src="/close.png"
            alt="Close Navigation"
          />
        </div>

        <ul>
          <li></li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
