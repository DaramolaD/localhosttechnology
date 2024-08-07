"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import NavigationMenu from "../molecules/NavigationMenu";
import Cta from "../molecules/Cta";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="sectionContainer w-full flex  py-5 px-5">
      <div className="flex items-center justify-between w-full z-50">
        <Image src={Logo} alt="logo" width={88} height={48} />
        <div className="hidden tablet:flex">
          <NavigationMenu />
        </div>
        <Cta />
        {!menuToggle ? (
          <Menu
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        ) : (
          <X
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}
      </div>
      {menuToggle && (
        <div className="bg-white grid tablet:hidden w-full absolute px-5 md:px-8 pb-14 pt-[90px] top-0 left-0 bg-headerColor/100">
          <NavigationMenu />
          <Cta />
        </div>
      )}
    </div>
  );
};

export default Header;
