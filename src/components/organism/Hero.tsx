import React from "react";
import Button from "../atom/Button";
import Image from "next/image";
import HeroImg from "@/assets/Hero.jpg";
import Cta from "../molecules/Cta";
import HeroItem from "../molecules/HeroItem";

const Hero = () => {
  return (
    <div className="sectionContainer flex items-center justify-center h-fit relative">
      <Image alt="hero-Img" src={HeroImg} className="w-full h-full absolute" />
      <div className="grid gap-14 md:gap-20 z-10 pt-36 md:pt-40 h-full">
        <div className="flex flex-col items-start md:items-center gap-8 text-white text-balance px-5">
          <div className="grid justify-center text-left md:text-center justify-items-center pt-0 md:pt-10 gap-3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl !leading-tight text-wrap max-w-[1000px]">
              Transform Your Business with Cutting-Edge Tech Solutions
            </h1>
            <div className="grid max-w-[800px]">
              <p className="text-base md:text-lg !leading-normal text-wrap">
                Struggling with outdated systems or unreliable tech?
              </p>
              <p className="text-base md:text-lg !leading-normal w-full max-w-[700px] text-wrap">
                Discover how our tailored ATM monitoring, software upgrades, and
                renewable energy solutions can streamline your operations and
                boost productivity.
              </p>
            </div>
          </div>
          <Cta
            primaryText="Book A Call"
            primaryVariant="default"
            primarySize="lg"
            primaryOnClick={() => console.log("Book A Demo clicked")}
            secondaryText="Contact Us"
            secondaryVariant="secondary"
            secondarySize="lg"
            secondaryOnClick={() => console.log("Contact Us clicked")}
            className=""
          />
        </div>
        <div className="flex w-full bg-black px-5 overflow-hidden">
          <HeroItem />
        </div>
      </div>
    </div>
  );
};

export default Hero;
