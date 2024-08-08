"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import NavigationMenu from "../molecules/NavigationMenu";
import Cta from "../molecules/Cta";
import { Menu, X } from "lucide-react";
import MobileNavMenu from "../molecules/MobileNavMenu";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="sectionContainer bg-[#0D111D] w-full py-5 px-5 flex z-50 top-0 right-0 left-0 fixed">
      <div className="flex items-center justify-between w-full z-10">
        <Image src={Logo} alt="logo" width={88} height={48} />
        <div className="hidden tablet:flex">
          <NavigationMenu />
        </div>
        <Cta
          primaryText="Book A Demo"
          primaryVariant="default"
          primarySize="lg"
          primaryOnClick={() => console.log("Book A Demo clicked")}
          secondaryText="Contact Us"
          secondaryVariant="secondary"
          secondarySize="lg"
          secondaryOnClick={() => console.log("Contact Us clicked")}
          className="hidden tablet:flex"
        />

        {!menuToggle ? (
          <Menu
            className="flex tablet:hidden text-white"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        ) : (
          <X
            className="flex tablet:hidden z-20 text-white"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}
      </div>
      {menuToggle && (
        <div className="bg-[#0d121e] gap-5 h-svh grid content-start tablet:hidden w-full absolute px-5 md:px-8 pb-14 pt-[110px] top-0 left-0 bg-headerColor/100">
          <MobileNavMenu />
          <Cta
            primaryText="Book A Call"
            primaryVariant="default"
            primarySize="lg"
            primaryOnClick={() => console.log("Book A Demo clicked")}
            secondaryText="Contact Us"
            secondaryVariant="secondary"
            secondarySize="lg"
            secondaryOnClick={() => console.log("Contact Us clicked")}
            className="flex-col !items-start"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
