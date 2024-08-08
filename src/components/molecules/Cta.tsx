import React from "react";
import { Button } from "../ui/button";

interface CtaProps {
  primaryText: string;
  primaryVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; // Ensure this matches the Button's variants
  primarySize?: "default" | "lg" | "sm" | "icon"; // Ensure this matches the Button's sizes
  primaryOnClick?: () => void;
  secondaryText: string;
  secondaryVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; // Ensure this matches the Button's variants
  secondarySize?: "default" | "lg" | "sm" | "icon"; // Ensure this matches the Button's sizes
  secondaryOnClick?: () => void;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
}

const Cta: React.FC<CtaProps> = ({
  primaryText,
  primaryVariant = "default",
  primarySize = "lg",
  primaryOnClick,
  secondaryText,
  secondaryVariant = "secondary",
  secondarySize = "lg",
  secondaryOnClick,
  className,
  primaryClassName,
  secondaryClassName,
}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <Button
        variant={secondaryVariant}
        size={secondarySize}
        className={`rounded-full ${secondaryClassName}`}
        onClick={secondaryOnClick}
      >
        {secondaryText}
      </Button>
      <Button
        variant={primaryVariant}
        size={primarySize}
        className={`rounded-full ${primaryClassName}`}
        onClick={primaryOnClick}
      >
        {primaryText}
      </Button>
    </div>
  );
};

export default Cta;
