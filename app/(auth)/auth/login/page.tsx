import LoginForm from "@/components/Login/LoginForm";
import SignInGoogle from "@/components/Login/SignInGoogle";
import { getSession } from "@/src/lib/actions/auth-actions";
import { ROUTES } from "@/src/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getSession();
  if (!!session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center py-10 gap-10 h-auto flex-col px-7 md:px-10">
      {/* logo and brand to link home  */}
      <Link href={ROUTES.root} className="flex items-center gap-3">
        <Image
          width={30}
          height={30}
          src={"/header/logo.png"}
          alt="Smart POS Logo"
        />
        <div className="text-md font-medium">SmartPOS</div>
      </Link>

      {/* inside box  */}
      <div className="flex flex-col border border-text-secondary shadow-sm w-full max-w-sm md:max-w-md p-6 px-6 md:px-10 rounded-lg">
        {/* title and short call to action description  */}
        <h2 className="text-center mb-2 text-lg md:text-2xl font-bold">
          Sign In
        </h2>
        <p className="text-center mb-6 text-sm md:text-base font-light">
          Welcome back! Please login
        </p>

        {/* sign in with google button  */}
        <SignInGoogle />

        {/* login form input  */}
        <LoginForm />

        {/* user alternative if user do not have an account  */}
        <p className="font-light mt-4 text-xs text-center md:text-base">
          Not have an account?{" "}
          <Link
            className="cursor-pointer text-brand"
            href={ROUTES.auth.register}
          >
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
