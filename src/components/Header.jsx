import { Link, NavLink } from "react-router";
import { navLinks } from "../constants";
import clsx from "clsx";
import { useState } from "react";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b border-neutral-300 px-[60px] py-[15px] max-lg:px-8 max-lg:pt-8 max-lg:pb-4 max-md:p-4">
      {/* container */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              className="-ml-4 block h-[32px] w-[242.4px] lg:h-auto lg:w-[260px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="max-lg:hidden">
            <ul className="flex gap-10">
              {navLinks.map(({ path, label }) => (
                <li key={label} className="group relative">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `navLink text-neutral-900 ${isActive}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        <span
                          className={`absolute bottom-[2px] left-0 h-[3px] rounded-[4px] bg-orange-500 transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav */}
          <nav
            className={clsx(
              "absolute top-full right-0 left-0 z-50 mx-4 overflow-hidden opacity-0 transition-all duration-500 md:mx-8 lg:hidden",
              isOpen && "opacity-100",
            )}
          >
            <ul
              className={clsx(
                "flex flex-col justify-center gap-3 rounded-sm bg-white p-2 transition-all duration-500",
                isOpen
                  ? "pointer-events-auto translate-y-0"
                  : "pointer-events-none -translate-y-full",
              )}
            >
              {navLinks.map(({ path, label }) => (
                <li key={label} className="group relative">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `navLink text-neutral-900 ${isActive}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <Button to="/recipes" className="text-center" variant="primary">
                Browse recipes
              </Button>
            </ul>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="flex size-[40px] cursor-pointer items-center justify-center rounded-[4px] bg-neutral-300 lg:hidden"
          >
            <img
              src="/assets/images/icon-hamburger-menu.svg"
              alt="icon hamburger"
            />
          </button>

          <Button className="max-lg:hidden" variant="primary">
            Browse recipes
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
