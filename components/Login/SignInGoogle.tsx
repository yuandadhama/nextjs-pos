"use client";

import { signInSocial } from "@/src/lib/actions/auth-actions";
import Image from "next/image";
import { useState } from "react";
import Loader from "../UI/Loader";
import { useRouter } from "next/navigation";

const SignInGoogle = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = (await signInSocial("google")) as string;
      router.push(url);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center gap-1 w-full flex-col mb-4 ">
      <button
        className="flex justify-center border border-brand p-2 md:p-3 hover:rounded-xl hover:bg-brand-muted transition-all items-center gap-4 cursor-pointer"
        onClick={() => handleGoogleAuth()}
      >
        {loading && <Loader />}
        <div className="">
          <Image
            src={"/icons/google.png"}
            alt="Google"
            title="Google"
            width={20}
            height={20}
          />
        </div>
        <p className="font-semibold text-sm">Continue with Google</p>
      </button>
      {error && <div className="text-center text-xs text-red-500">{error}</div>}
    </div>
  );
};

export default SignInGoogle;
