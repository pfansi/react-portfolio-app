import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/CV_Paulin_Fansi.pdf";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-2.png";

// 42474b 6f6d70 8ebeda
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#6f6d70] text-white">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "80px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>

      {/* Hambuger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-30% h-screen bg-[#6f6d70] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link className="" to="/work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a href={Resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/paulin-fansi-2956a7ba/"
              target="_blank"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/pfansi"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53bb6f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="pfansi76@gmail.com"
              target="_blank"
            >
              Email: pfansi76@gmail.com
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b39439]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="../assets/CV_Paulin_Fansi.pdf"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
