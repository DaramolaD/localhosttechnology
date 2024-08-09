import React from "react";
import SectionHeadings from "../atom/SectionHeadings";
import Image from "next/image";
import polaris from "@/assets/polaris.svg";
import providus from "@/assets/providus.svg";
import fidelity from "@/assets/fidelity.svg";
import lotus from "@/assets/lotus.svg";
import gtb from "@/assets/gtb.svg";
import parallex from "@/assets/parallex.svg";
import fcmb from "@/assets/fcmb.svg";
import jaiz from "@/assets/jaiz.svg";
import africaPrudential from "@/assets/africaPrudential.svg";

const Brands = () => {
  return (
    <div className="sectionContainer flex flex-col items-center justify-center overflow-hidden bg-royalBlue-50 gap-10 px-5 py-14 md:py-20">
      <SectionHeadings text="Trusted by Leading Brands" />
      <div className="flex gap-5 items-center justify-between overflow-x-auto w-full pb-1">
        {brands.map(({ id, img }) => (
          <Image key={id} src={img} alt="brands" className="w-14 h-14 md:w-20 md:h-20"/>
        ))}
      </div>
    </div>
  );
};

export default Brands;

const brands = [
  {
    id: 1,
    img: polaris,
  },
  {
    id: 2,
    img: fidelity,
  },
  {
    id: 3,
    img: fcmb,
  },
  {
    id: 4,
    img: lotus,
  },
  {
    id: 5,
    img: providus,
  },
  {
    id: 6,
    img: gtb,
  },
  {
    id: 7,
    img: africaPrudential,
  },
  {
    id: 8,
    img: jaiz,
  },
  {
    id: 9,
    img: parallex,
  },
];
