"use client";

import { useAuthContext } from "@/src/context/AuthContext";
import { signOut } from "@/src/lib/actions/auth-actions";
import { ROUTES } from "@/src/lib/routes";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const user = useAuthContext();

  const handleSignOut = async () => {
    await signOut();
    router.push(ROUTES.auth.login);
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button
        className="bg-red-500 px-4 p-2 rounded cursor-pointer text-white hover:opacity-70"
        onClick={handleSignOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
