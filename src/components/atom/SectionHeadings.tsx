import React from "react";
type heading = {
  text: string;
};
const SectionHeadings = ({ text }: heading) => {
  return <h2 className="text-5xl">{text}</h2>;
};

export default SectionHeadings;
