import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div className="flex items-center gap-5 hidden tablet:flex">
      <Button variant="secondary" size="lg" className="rounded-full">
        Contact Us
      </Button>
      <Button variant="default" size="lg" className="rounded-full">
        Book A Demo
      </Button>
    </div>
  );
};

export default Cta;
