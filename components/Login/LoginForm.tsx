import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import InputBox from "../Form/InputBox";

const LoginForm = () => {
  return (
    <form action="">
      <InputBox
        icon={<MdEmail />}
        title="Email"
        type="email"
        placeholder="e.g. john@example.com"
      />
      <InputBox
        icon={<RiLockPasswordFill />}
        title="Password"
        type="password"
        placeholder="Min. 8 Characters"
      />
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
