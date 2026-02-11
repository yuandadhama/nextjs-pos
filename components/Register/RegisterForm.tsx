"use client";

import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import InputBox from "../Form/InputBox";
import { useState } from "react";
import Loader from "../UI/Loader";
import { signUp } from "@/src/lib/actions/auth-actions";
import { ROUTES } from "@/src/lib/routes";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("full-name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirm-password") as string;

      if (password !== confirmPassword) {
        throw new Error("Password do not match");
      }

      const result = await signUp(email, password, name);

      if (!result.user) {
        setError("Failed to create account");
      }

      router.push(ROUTES.dashboard.root);
    } catch (err) {
      setError(`${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* loading indicator  */}
      {loading && <Loader />}

      <InputBox
        icon={<CgProfile />}
        title="Full Name"
        type="text"
        placeholder="e.g. John Doe"
        name="full-name"
      />
      <InputBox
        icon={<MdEmail />}
        title="Email"
        type="email"
        placeholder="e.g. john@example.com"
        name="email"
      />
      <InputBox
        icon={<RiLockPasswordFill />}
        title="Password"
        type="password"
        placeholder="Min. 8 Characters"
        name="password"
      />
      <InputBox
        icon={<RiLockPasswordFill />}
        title="Confirm Password"
        type="password"
        placeholder="Min. 8 Characters"
        name="confirm-password"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <button
        type="submit"
        className="p-2 text-sm md:text-base bg-brand hover:rounded-xl transition-all text-white w-full mt-3 cursor-pointer"
      >
        Create your account
      </button>
    </form>
  );
};

export default RegisterForm;
