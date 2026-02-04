import FeatureCard from "@/components/HomePage/FeatureCard";
import HeroSection from "@/components/HomePage/HeroSection";
import Journey from "@/components/HomePage/Journey";
import { FaCoffee, FaStore, FaTag, FaTree } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";
import { IoAnalytics, IoRestaurant } from "react-icons/io5";
import { MdInventory } from "react-icons/md";

// data definition for section 2
const iconWidth = 20;
const industryIcons = [
  <FaStore size={iconWidth} />,
  <IoRestaurant size={iconWidth} />,
  <FaCoffee size={iconWidth} />,
  <FaTree size={iconWidth} />,
  <GiCroissant size={iconWidth} />,
];

// data definition for features section
const iconStyle = "text-brand";
const iconSize = 35;
const features = [
  {
    title: "Inventory Management",
    description:
      "Real time tracking and automated reordering to keep your shelves stocked",
    icon: <MdInventory className={iconStyle} size={iconSize} />,
  },
  {
    title: "Sales Analytics",
    description:
      "Deep insights into your daily performance with visual reporting and forecasting",
    icon: <IoAnalytics className={"text-success"} size={iconSize} />,
  },
  {
    title: "Customer Loyalty",
    description:
      "Built-in rewards programs to keep your customers coming back for more",
    icon: <FaTag className={iconStyle} size={iconSize} />,
  },
];

const page = () => {
  return (
    <>
      <section
        className="flex justify-center p-6 pt-25 bg-linear-to-b from-background-primary to-gray-100"
        id="home"
      >
        <HeroSection />
      </section>

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

      {/* features section  */}
      <section className="w-full flex justify-center" id="features">
        <div className="container px-4 max-w-4xl pb-10 pt-20">
          <div className="flex flex-col gap-1 mb-8">
            <h2 className="text-2xl font-bold">
              Powerful Features for Your Growth
            </h2>
            <div className="w-12 h-1.5 bg-success rounded-full"></div>
          </div>

          {/* features card  */}
          <div>
            {features.map(({ title, description, icon }, index) => (
              <FeatureCard
                title={title}
                description={description}
                icon={icon}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* about section  */}
      <section
        className="bg-brand w-full py-10 bg-linear-to-b from-brand-muted to-background-primary flex justify-center pt-20"
        id="about"
      >
        <div className="container max-w-4xl px-6">
          <div className="mb-16">
            <h4 className="text-sm text-brand font-bold mb-8">OUR MISSION</h4>
            <h1 className="text-4xl font-bold mb-4">
              Empowering businesses to{" "}
              <span className="text-brand">thrive </span>
              in a digital world.
            </h1>
            <p className="text-text-secondary text-lg">
              We believe that every small business need the same level of
              technological sophistication as global enterprises. Our mission is
              to level up the playing field through intuitive, powerful, and
              accessible POS solutions
            </p>
          </div>

          {/* journey section  */}
          <Journey />
        </div>
      </section>
    </>
  );
};

export default page;
