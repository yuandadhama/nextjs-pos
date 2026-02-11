import RegisterForm from "@/components/Register/RegisterForm";
import SignUpGoogle from "@/components/Register/SignUpGoogle";
import { ROUTES } from "@/src/lib/routes";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/header/logo.png";

const page = () => {
  return (
    <div className="flex items-center py-10 gap-10 h-auto flex-col px-7 md:px-10">
      {/* logo and brand to link home  */}
      <Link href={ROUTES.root} className="flex items-center gap-3">
        <Image width={30} height={30} src={logo} alt="Smart POS Logo" />
        <div className="text-md font-medium">SmartPOS</div>
      </Link>

      {/* inside box  */}
      <div className="flex flex-col border border-text-secondary shadow-sm w-full max-w-sm md:max-w-md p-6 px-6 md:px-10 rounded-lg">
        {/* title and short call to action description  */}
        <h2 className="text-center mb-2 text-lg md:text-2xl font-bold">
          Sign Up
        </h2>
        <p className="text-center mb-6 text-sm md:text-base font-light">
          Create your business account to begin
        </p>

        {/* sign up with google button  */}
        <SignUpGoogle />

        {/* register form input  */}
        <RegisterForm />

        {/* user alternative if user already have an account  */}
        <p className="font-light mt-4 text-xs text-center md:text-base">
          Already have an account?{" "}
          <Link className="cursor-pointer text-brand" href={ROUTES.auth.login}>
            Sign In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
