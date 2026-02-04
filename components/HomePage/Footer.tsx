import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { FaAt, FaShareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border border-gray-200 mt-20 p-6 flex-center pb-8">
      <div className="container w-full max-w-4xl md:flex flex-col">
        <div className="md:flex ">
          {/* logo and brand  */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={"/header/logo.png"}
                alt="SmartPOS Logo"
                width={30}
                height={20}
              />

              <div className="font-bold">SmartPOS</div>
            </div>

            {/* short description  */}
            <p className="text-text-secondary mb-6">
              Empowering small business with enterprise-grade tools since-2024.
            </p>
          </div>

          <div className="flex-2 md:flex justify-center">
            {/* link  */}
            <div className="flex w-[60%] h-50 justify-between">
              <ul className="footer-ul">
                <h4>Product</h4>
                <li>
                  <a href="#home">Features</a>
                </li>
                <li>
                  <a href="#features">Pricing</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
              <ul className="footer-ul">
                <h4>Company</h4>
                <li>
                  <a href="#home">About</a>
                </li>
                <li>
                  <a href="#features">Careers</a>
                </li>
                <li>
                  <a href="#about">Privacy</a>
                </li>
              </ul>
            </div>

            {/* social  */}
          </div>
        </div>

        <div className="md:flex flex-col items-center">
          {/* social and copyright */}

          <div className="flex gap-6 text-text-secondary mb-6">
            <BiWorld />
            <FaShareAlt />
            <FaAt />
          </div>
          <p className="text-text-secondary text-sm">
            © 2024 SmartPOS Systems Inc. All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
