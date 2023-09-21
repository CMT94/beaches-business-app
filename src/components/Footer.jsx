import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const SOCIALS = [
  <FaFacebook size={20} className="icon" />,
  <FaTwitter size={20} className="icon" />,
  <FaInstagram size={20} className="icon" />,
  <FaPinterest size={20} className="icon" />,
  <FaYoutube size={20} className="icon" />,
];

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            {SOCIALS.map((social, socialIndex) => (
              <span key={socialIndex}>{social}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About us</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Booking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
