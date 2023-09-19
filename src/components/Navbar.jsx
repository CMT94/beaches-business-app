import React from "react";

import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const NAV_LINKS = ["Home", "Destinations", "Travel", "View", "Booking"];

const SOCIALS = [
  <FaFacebook size={20} className="icon" />,
  <FaTwitter size={20} className="icon" />,
  <FaInstagram size={20} className="icon" />,
  <FaPinterest size={20} className="icon" />,
  <FaYoutube size={20} className="icon" />,
];

const Navbar = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] =
    React.useState(false);

  const toggleMobileMenu = () =>
    setIsMobileMenuDisplayed((prevState) => !prevState);

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 className={isMobileMenuDisplayed ? "hidden" : "block"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        {NAV_LINKS.map((link, linkIndex) => (
          <li key={linkIndex} className="cursor-pointer">
            {link}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex">
        <BiSearch size={20} className="mr-2 cursor-pointer" />
        <BsPerson size={20} className="cursor-pointer" />
      </div>

      {/* MOBILE MENU - START */}
      <div className="md:hidden z-10" onClick={toggleMobileMenu}>
        {isMobileMenuDisplayed ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>

      <div
        className={
          isMobileMenuDisplayed
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-5 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <h1>BEACHES.</h1>
        <ul>
          {NAV_LINKS.map((link, linkIndex) => (
            <li
              key={linkIndex}
              className="border-b cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {link}
            </li>
          ))}
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-8">
            {SOCIALS.map((social) => social)}
          </div>
        </ul>
      </div>
      {/* MOBILE MENU - END */}
    </div>
  );
};

export default Navbar;
