import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const SingleOpenAccordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="transition-all ease-linear duration-75 cursor-pointer"
        >
          <div className="mb-[20px] uppercase">
            <label htmlFor="" onClick={() => handleClick(index)}>
              <input
                type="radio"
                checked={index === openIndex}
                className=" mr-2 accent-primary scale-110"
              />
              {item.title}
            </label>
          </div>
          <div
            className={`relative capitalize ${
              openIndex === index ? "h-[50px] mb-2" : "h-0  overflow-hidden"
            }  bg-white flex px-2 items-center transition-all ease-linear duration-75`}
          >
            <div className="left-[30px] bottom-[50px] w-0 h-0 border-r-[12px] border-l-[12px] border-b-[13px]   border-transparent border-b-white absolute "></div>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleOpenAccordion;
