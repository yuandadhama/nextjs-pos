import HeroSection from "@/components/HomePage/HeroSection";
import { FaCoffee, FaStore, FaTree } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { MdInventory } from "react-icons/md";

const iconWidth = 20;
const industryIcons = [
  <FaStore size={iconWidth} />,
  <IoRestaurant size={iconWidth} />,
  <FaCoffee size={iconWidth} />,
  <FaTree size={iconWidth} />,
  <GiCroissant size={iconWidth} />,
];

const page = () => {
  return (
    <>
      <main className="flex justify-center p-6 pt-25 bg-linear-to-b from-background-primary to-gray-100">
        <HeroSection />
      </main>

      <section className="py-10 text-text-secondary flex flex-col justify-center gap-4 w-full">
        <h4 className="text-center tracking-widest">
          TRUSTED BY INDUSTRY LEADER
        </h4>
        <div className="text-text-secondary flex justify-center gap-7">
          {industryIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      </section>

      <section className="w-full">
        <div className="container px-4">
          <div className="">
            <h2>Powerful Features for Your Growth</h2>
            <div></div>
          </div>
          <div>
            <div>
              <div>
                <MdInventory />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
