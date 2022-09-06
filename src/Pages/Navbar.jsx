import React,{useState} from "react";
import Logo from "../Assets/img102.svg";
import { BsChatText, BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(true);
  const handlNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="head gradient py-4 ">
        <div className="items-center justify-around flex ">
          <div>
            <img
              src={Logo}
              className="w-12 ml-2 hover:hue-rotate-15 hover:rotate-12 duration-100"
            />
          </div>
          <div className="md:block hidden">
            <ul className="flex">
              <li>
              <Link to="home"  smooth={true} offset={100} duration={500}>
                Home
              </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={100} duration={500}>
                  About
                </Link>
              </li>

              <li>
                <Link to="service" smooth={true} offset={100} duration={500}>
                Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} offset={100} duration={500}>
                Portfolio
                </Link>
                </li>

              <li>
              <Link to="pricing" smooth={true} offset={100} duration={500}>
                Pricing
                </Link>
                </li>
              <li>
              <Link to="howwework" smooth={true} offset={100} duration={500}>
                How we work
                </Link>
                </li>
            </ul>
          </div>
          <div className="flex">
            <div className="px-3">
              <BsChatText size={20} className="icon " />
            </div>
            <a className="hover:text-[#03d87d] hover:underline duration-300">
              Contact
            </a>
          </div>
          <button onClick={handlNav} className="md:hidden block">
            {!nav ? (
              <AiOutlineClose size={30} className="icon" />
            ) : (
              <BsList size={30} className="icon" />
            )}
          </button>
        </div>
        {!nav ? (
          <div className="bg-black w-full h-[100%] top-0 left-0 fixed ease-in-out duration-300 flex flex-col items-center justify-center py-5">
            <button
              onClick={handlNav}
              className="md:ml-[80%] sm:ml-[70%] ml-[50%] "
            >
              {!nav ? (
                <AiOutlineClose
                  size={30}
                  className="icon hover:rotate-180 hover:bg-white rounded-full duration-500"
                />
              ) : (
                <BsList size={30} className="icon" />
              )}
            </button>
            <div className="py-5">
              <img src={Logo} className="w-12" />
            </div>
            <div className="flex flex-col items-center py-2">
              <ul className="flex flex-col items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>How we work</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
