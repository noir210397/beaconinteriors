import React, { HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: ButtonProps) => {
  return <button {...props}>Button</button>;
};

export default Button;
