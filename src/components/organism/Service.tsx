import React from "react";
import SectionHeadings from "../atom/SectionHeadings";
import ServiceItem from "../molecules/ServiceItem";

const Service = () => {
  return (
    <div className="sectionContainer flex flex-col items-center justify-center gap-10 px-5 pt-14 md:pt-24">
      <div className="grid gap-2 max-w-[1000px]">
        <SectionHeadings text="Tailored IT Solutions for Your Business Success" />
        <p className="text-sm md:text-base lg:text-xl text-royalBlue-950 text-left md:text-center">
          At LocalHost, we understand that each business has unique needs.
          That&apos;s why we offer tailored IT solutions designed to enhance
          efficiency, security, and performance across various operations.
          Explore our comprehensive range of services designed to empower your
          business.
        </p>
      </div>
      <div className="flex">
        <ServiceItem />
      </div>
    </div>
  );
};

export default Service;
