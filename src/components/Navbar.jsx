import clsx from "clsx";
import { logo, close, menu } from "../assets";
import { navLinks } from "../utils";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="carded-logo" className="w-[124px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={clsx(
              "font-normal cursor-pointer text-[14px] text-white tracking-[2px] uppercase hover:text-secondary transition-all duration-150",
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            )}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex  justify-end items-center flex-1 ">
        <img
          src={toggle ? close : menu}
          alt="hamburger-menu"
          className="w-[20px] h-[20px] object-contain  cursor-pointer transition-all duration-150"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={clsx(
          "p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sm:hidden ",
          toggle ? "flex " : "hidden"
        )}
      >
        <ul className="flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={clsx(
                "font-normal cursor-pointer text-[14px] text-white tracking-[2px] uppercase hover:text-secondary transition-all duration-150",
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              )}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
