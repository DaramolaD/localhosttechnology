import React from "react";


const HeroItem = () => {
  const items = [
    {
      title: "Comprehensive IT Solutions",
      description:
        "End-to-end solutions from hardware to software tailored to your needs.",
    },
    {
      title: "Reliable System Integration",
      description:
        "Seamlessly integrate and support all your business systems.",
    },
    {
      title: "Robust Security Solutions",
      description: "Protect your operations with advanced security measures.",
    },
    {
      title: "Expert Maintenance Services",
      description:
        "Ensure optimal performance with our dedicated maintenance support.",
    },
  ];

  return (
    <div className="flex gap-5 w-full overflow-scroll justify-start lg:justify-center">
      {items.map(({ title, description }, index) => (
        <div
        key={index}
        className="relative px-[10px] py-6 min-w-[272px] max-w-[272px] grid gap-1 border-t border-transparent hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:h-[2px] hover:before:bg-gradient-to-r hover:before:from-black hover:before:via-[#1035FA] hover:before:to-black hover:before:transition-opacity duration-300"
      >
        <p className="text-lg text-white text-balance">{title}</p>
        <p className="text-sm text-white text-balance">{description}</p>
      </div>
      
      ))}
    </div>
  );
};

export default HeroItem;
