"use client";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useClickOutside";
const list = [
  "denver",
  "boston",
  "philadelphia",
  "portland",
  "milwaukee",
  "phoenix",
  "los angeles",
  "new york",
];
const SelectInput = () => {
  const [value, setValue] = useState("colorado");
  const [open, setOpen] = useState(false);
  const [states, setStates] = useState<string[]>(list);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useOutsideClick(elementRef, () => {
    if (open) setOpen(false);
  });
  function search(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase().trim();
    setStates(list.filter((item) => item.includes(value)));
  }
  function changeValue(state: string) {
    setValue(state);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) {
      if (inputRef.current) {
        inputRef.current.value = "";
        listRef.current?.scrollTo(0, 0);
        setStates(list);
      }
    } else {
      inputRef.current?.focus();
    }
  }, [open]);
  return (
    <div className="relative" ref={elementRef}>
      <div
        className={`absolute z-[1000] p-2 inset-x-0 bottom-[50px] overflow-hidden bg-white transition-transform duration-75 ${
          open ? "visible translate-y-0 " : "translate-y-[10px] invisible"
        }`}
      >
        <input
          type="text"
          onChange={search}
          className="w-full p-2 focus:outline-none focus:border-primary focus:border rounded-lg mb-2"
          ref={inputRef}
        />
        <ul
          className={`overflow-y-auto py-2 ${
            states.length !== 0 ? "h-[200px]" : ""
          }`}
          ref={listRef}
        >
          {states.length === 0 ? (
            <li className="py-2 text-center text-lg text-black uppercase ">
              no states found
            </li>
          ) : (
            states.map((item) => (
              <li
                key={item}
                onClick={() => {
                  changeValue(item);
                }}
                className={`capitalize cursor-pointer text-lg hover:bg-blue-600 hover:text-mywhite px-2 rounded ${
                  value === item ? "" : ""
                }`}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
      <div
        className="py-2 relative text-lg font-bold capitalize h-[50px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {value}
        <span className="absolute top-1/2 -translate-y-1/2 right-3 text-sm">
          {open ? <BiUpArrow /> : <BiDownArrow />}
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
