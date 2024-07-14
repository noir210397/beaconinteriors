import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

const Label = ({ className, children, ...rest }: Props) => {
  return (
    <label
      className={`${className} py-3 text-base text-primary uppercase mb-2`}
      {...rest}
    >
      {children}
      <span className="ps-2 text-red-700">*</span>
    </label>
  );
};

export default Label;
