import Footer from "@/components/HomePage/Footer";
import Navbar from "@/components/Navbar/Navbar";

import { getSession } from "@/src/lib/actions/auth-actions";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getSession();

  return (
    <main>
      <Navbar session={session} />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
