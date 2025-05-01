"use client";
import React, { ComponentProps, HTMLAttributes } from "react";
interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
