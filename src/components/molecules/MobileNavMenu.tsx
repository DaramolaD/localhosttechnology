import Link from "next/link";
import React from "react";

const MobileNavMenu = () => {
  return (
    <nav className="w-full flex flex-col h-fit tablet:flex-row items-center gap-5">
      {navLink.map(({ id, title, url }) => (
        <Link
          key={id}
          href={url}
          className="w-full rounded-sm text-white text-nowrap py-2 px-3 hover:bg-white hover:text-black"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavMenu;

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
