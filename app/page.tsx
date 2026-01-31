import HeroSection from "@/components/HomePage/HeroSection";

const page = () => {
  return (
    <>
      <main className="flex justify-center p-6 pt-25 bg-linear-to-b from-background-primary to-blue-300">
        <HeroSection />
      </main>

      <div>
        <h4 className="text-center">TRUSTED BY INDUSTRY LEADER</h4>
      </div>
    </>
  );
};

export default page;
