"use client";

import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import InputBox from "../Form/InputBox";
import { useState } from "react";
import { signUp } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await signUp.email({
      name: formData.get("full-name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (response.error) {
      setError(response.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {error && <p className="text-red-500">{error}</p>}
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
