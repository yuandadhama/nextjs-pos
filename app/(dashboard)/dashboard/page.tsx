import Profile from "@/components/Dashboard/Profile";
import { AuthProvider } from "@/src/context/AuthContext";
import { getSession } from "@/src/lib/actions/auth-actions";
import { ROUTES } from "@/src/lib/routes";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getSession();
  const isLogin = !!session;

  if (!isLogin) {
    redirect(ROUTES.auth.login);
  }

  return (
    <AuthProvider value={session?.user}>
      <main className="w-full h-screen">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Profile />
      </main>
    </AuthProvider>
  );
};

export default page;
