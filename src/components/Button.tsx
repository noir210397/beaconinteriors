import React, { ComponentProps, HTMLAttributes } from "react";
interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ ...props }: ButtonProps) => {
  return <button {...props}>Button</button>;
};

export default Button;
