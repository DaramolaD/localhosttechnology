import Link from "next/link";
import React from "react";

const NavigationMenu = () => {
  return (
    <div className="w-fit flex flex-col tablet:flex-row items-center gap-5">
      {navLink.map(({ id, title, url }) => (
        <Link key={id} href={url} className="w-full text-nowrap py-2 px-3 hover:bg-white">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavigationMenu;

const navLink = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/",
  },
  {
    id: 3,
    title: "Our Service",
    url: "/",
  },
  {
    id: 4,
    title: "Industry",
    url: "",
  },
];
