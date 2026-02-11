import Footer from "@/components/HomePage/Footer";
import Navbar from "@/components/Navbar/Navbar";

import { AuthProvider } from "@/src/context/AuthContext";
import { getSession } from "@/src/lib/actions/auth-actions";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getSession();

  return (
    <AuthProvider value={session?.user}>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default layout;
