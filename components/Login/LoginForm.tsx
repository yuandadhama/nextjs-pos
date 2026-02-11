"use client";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import InputBox from "../Form/InputBox";
import { useState } from "react";
import Loader from "../UI/Loader";
import { signIn } from "@/src/lib/actions/auth-actions";

const LoginForm = () => {
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const result = await signIn(email, password);
      if (!result.user) {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError(`${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loader />}
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
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <button
        type="submit"
        className="p-2 text-sm md:text-base bg-brand hover:rounded-xl transition-all text-white w-full mt-3 cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
