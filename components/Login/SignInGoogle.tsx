import Image from "next/image";

const SignInGoogle = () => {
  return (
    <button className="mb-4 flex justify-center border border-brand p-2 md:p-3 hover:rounded-xl hover:bg-brand-muted transition-all items-center gap-4 cursor-pointer">
      <div className="">
        <Image
          src={"/icons/google.png"}
          alt="Google"
          title="Google"
          width={20}
          height={20}
        />
      </div>
      <div className="font-semibold text-sm">Sign in with Google</div>
    </button>
  );
};

export default SignInGoogle;
