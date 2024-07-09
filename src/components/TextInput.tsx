import React, { ComponentProps } from "react";
interface Props extends ComponentProps<"input"> {
  label: string;
  errorMsg: string;
}
const TextInput = ({ label, className, errorMsg, ...rest }: Props) => {
  return (
    <>
      <label className="py-3 text-base text-primary">
        {label}
        <span className="ps-2 text-red-700">*</span>
      </label>
      <input type="text" className={`${className} `} {...rest} />
      <span className="block">{errorMsg}</span>
    </>
  );
};

export default TextInput;
