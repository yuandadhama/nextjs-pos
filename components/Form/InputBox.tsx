import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type props = {
  title: string;
  type: HTMLInputTypeAttribute;
  icon: ReactNode;
  placeholder: string;
  name: string;
};

const InputBox = ({ title, type, icon, placeholder, name }: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={title} className="text-sm mb-1 md:text-base font-medium">
        {title}
      </label>
      <div className="border text-text-secondary gap-2 flex items-center p-2 rounded bg-gray-100">
        <label htmlFor={title}>{icon}</label>
        <input
          className="outline-0 text-xs md:text-sm w-full bg-transparent"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={title}
          placeholder={placeholder}
          name={name}
          required
        />
        <div onClick={handleShowPassword} className="cursor-pointer">
          {type == "password" && (
            <div>{showPassword ? <FaEye /> : <FaEyeSlash />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
