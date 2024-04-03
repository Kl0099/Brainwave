import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";

import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
const Header = () => {
  const pathname = useLocation();
  const [openmenu, setOpenmenu] = useState(false);

  const toggleMenu = () => {
    if (openmenu) {
      setOpenmenu(false);
      enablePageScroll();
    } else {
      setOpenmenu(true);
      disablePageScroll();
    }
  };
  const handleclick = () => {
    if (!openmenu) return;
    enablePageScroll();
    setOpenmenu(false);
  };
  return (
    <div
      className={` fixed left-0 w-full top-0 z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openmenu ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          href={"#hero"}
          className="block w-[12rem] xl:mr-8"
        >
          <img
            src={brainwave}
            alt="brainwave"
            width={190}
            height={40}
          />
        </a>
        <nav
          className={` fixed top-[5rem] left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent bottom-0  ${
            openmenu ? "flex" : "hidden"
          }`}
        >
          <div className=" relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                onClick={handleclick}
                className={`block relative font-code text-2xl transition-colors uppercase text-n-1 hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold lg:text-xs  ${
                  pathname.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                href={item.url}
                key={item.id}
              >
                {" "}
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors lg:block"
        >
          New Account
        </a>
        <Button
          className={"hidden lg:flex"}
          href={"#login"}
        >
          Sign in
        </Button>
        <Button
          className={"ml-auto lg:hidden "}
          px={"px-3"}
          onClick={toggleMenu}
        >
          <MenuSvg openNavigation={openmenu} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
