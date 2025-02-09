"use client";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEdit,
} from "react-icons/fa";

const FootLinks = () => {
  const [links, setLinks] = useState<String[] | []>([]);
  const [secondLinks, setSecondLinks] = useState<String[] | []>([]);
  useEffect(() => {
    setLinks([
      "Colour / Image Disclaimer",
      "About Us",
      "Delivery Information",
      "Privacy Policy",
      "Terms & Conditions",
      "Return Policy",
      "Sale",
    ]);
    setSecondLinks(["Login", "Register"]);
  }, []);
  return (
    <div className="w-full px-4 md:px-0 md:max-w-[84%] flex flex-col gap-4 mx-auto py-8 bg-white border-t border-t-slate-300/50">
      <ul className="w-full flex gap-3 items-center justify-center flex-wrap">
        {links.map((link, i) => {
          return (
            <li
              className="hover:text-primary flex items-center gap-3 cursor-pointer"
              key={i}
            >
              <span className="w-1 h-1 rounded-full bg-secondary-light"></span>
              <span className="font-light">{link}</span>
            </li>
          );
        })}
      </ul>
      <ul className="w-full flex gap-3 items-center justify-center flex-wrap">
        {secondLinks.map((link, i) => {
          return (
            <li
              className="hover:text-primary flex items-center gap-3 cursor-pointer"
              key={i}
            >
              <span className="w-1 h-1 rounded-full bg-secondary-light"></span>
              <span className="font-light">{link}</span>
            </li>
          );
        })}
      </ul>
      <span className="text-center font-light">
        Store Open Hours: Mon - Fri 9.30am - 5.30pm Sat 9.30am - 4pm Sun Closed
      </span>
      <div className="flex gap-4 items-center justify-center">
        <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 cursor-pointer" />
        <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700 cursor-pointer" />
        <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-600 cursor-pointer" />
        <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900 cursor-pointer" />
        <div className="w-8 h-8 flex items-center justify-center rounded-full py-2 pl-2 pr-1 bg-slate-500 hover:bg-slate-700 cursor-pointer">
          <FaEdit className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default FootLinks;
