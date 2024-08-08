import React from "react";
type heading = {
  text: string;
};
const SectionHeadings = ({ text }: heading) => {
  return <h2 className="text-2xl md:text-3xl lg:text-4xl text-royalBlue-950 md:text-center font-medium">{text}</h2>;
};

export default SectionHeadings;
