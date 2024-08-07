import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  primaryCta?: boolean;
  secondaryCta?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  text,
  rightIcon,
  className = "",
  primaryCta = true,
  secondaryCta = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full px-4 py-2 flex items-center justify-center transition-all duration-300",
        {
          "bg-blue-500 text-white hover:bg-blue-600": primaryCta,
          "bg-gray-500 text-white hover:bg-gray-600": secondaryCta,
          "bg-transparent text-black": !primaryCta && !secondaryCta,
        },
        className
      )}
      onClick={onClick}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {text}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
