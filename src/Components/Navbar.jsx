import React, { useState, useEffect } from "react";
import Logo from "../assets/digitallafda.png";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "ABOUT US", path: "/about-us" },
    { name: "SERVICES", path: "/service" },
    { name: "OUR WORK", path: "/our-work" },
    { name: "CLIENTS", path: "/our-client" },
    { name: "OUR TEAM", path: "/our-team" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <div
      className={`fixed top-0 z-60 py-4 transition-all duration-300 ease-in-out w-full bg-white flex justify-between md:px-14 px-4 border-b border-gray-300 ${
        isScrolled ? "md:h-[14vh] h-[10vh] shadow-md bg-opacity-90" : "md:h-[17vh] h-[10vh]"
      }`}
    >
      {/* Logo */}
      <div onClick={() => navigate("/")} className="h-full flex items-center">
        <img src={Logo} alt="logo" className="md:w-70 w-55 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-10 text-lg items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className="flex flex-col justify-center items-center gap-1.5 group cursor-pointer"
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center bg-[#1C352D] px-4 rounded-md text-white md:hidden">
        {menuOpen ? (
          <RxCross1
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-6 py-6 px-6 text-lg">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className="cursor-pointer text-center"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
