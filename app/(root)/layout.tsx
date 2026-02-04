import Footer from "@/components/HomePage/Footer";
import Navbar from "@/components/Navbar/Navbar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
