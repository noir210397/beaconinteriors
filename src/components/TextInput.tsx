import React, { ComponentProps } from "react";
interface Props extends ComponentProps<"input"> {
  errorMsg?: string;
}
const TextInput = ({ className, errorMsg, id, ...rest }: Props) => {
  return (
    <>
      <div className="mb-2">
        <input
          type="text"
          name={id}
          id={id}
          className={`${className} w-full py-2 focus:outline-none border-b bg-transparent border-mydark`}
          {...rest}
        />
        {errorMsg && <span className="block">{errorMsg}</span>}
      </div>
    </>
  );
};

export default TextInput;
