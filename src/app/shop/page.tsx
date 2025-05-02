"use client";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
} from "@/components/accordion/Accordion";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHeaders from "@/components/PageHeaders";
import SectionHeaders from "@/components/SectionHeaders";
import { data } from "@/products";
import { AnimatePresence, color, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Reducer, useReducer, useRef } from "react";
type Actions = "category" | "color" | "material";

const materials = [
  "Leather",
  "Bamboo",
  "Cotton",
  "Wool",
  "Silk",
  "Linen",
  "Polyester",
  "Hemp",
  "Jute",
  "Canvas",
  "Denim",
  "Rayon",
];
const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Black",
  "White",
  "Orange",
  "Purple",
  "Brown",
  "Gray",
  "Pink",
  "Beige",
];
const choices = [
  {
    name: "category",
    list: ["furniture", "lighting"],
  },
  {
    name: "material",
    list: materials,
  },
  {
    name: "color",
    list: colors,
  },
];
type ActionType = {
  type: "add" | "remove";
  payload: { name: Actions; value: string };
};

type SearchState = {
  category: string[];
  color: string[];
  material: string[];
};
function reducer(state: SearchState, action: ActionType): SearchState {
  if (action.type === "add") {
    const { name, value } = action.payload;
    switch (name) {
      case "category":
        return {
          ...state,
          category: [...(state.category || []), value],
        };
      case "color":
        return {
          ...state,
          color: [...(state.color || []), value],
        };
      case "material":
        return {
          ...state,
          material: [...(state.material || []), value],
        };
      default:
        throw new Error(`Unhandled name: ${name} in add action`);
    }
  } else if (action.type === "remove") {
    const { name, value } = action.payload;
    switch (name) {
      case "category":
        return {
          ...state,
          category: (state.category || []).filter((item) => item !== value),
        };
      case "color":
        return {
          ...state,
          color: (state.color || []).filter((item) => item !== value),
        };
      case "material":
        return {
          ...state,
          material: (state.material || []).filter((item) => item !== value),
        };
      default:
        throw new Error(`Unhandled name: ${name} in remove action`);
    }
  } else {
    throw new Error("Unhandled action type: " + (action as any).type);
  }
}
const Shop = () => {
  const router = useRouter();

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const initialArg: SearchState = {
    category: searchParams.getAll("category") || [],
    color: searchParams.getAll("color") || [],
    material: searchParams.getAll("material") || [],
  };
  const [state, dispatch] = useReducer<Reducer<SearchState, ActionType>>(
    reducer,
    initialArg
  );
  function setQueryString() {
    const { category, color, material } = state;
    const params = new URLSearchParams();

    // Clear existing params if all arrays are empty
    const allEmpty = [category, color, material].every(
      (arr) => arr.length === 0
    );

    if (!allEmpty) {
      // Append each value from every non-empty array
      for (const [key, values] of Object.entries(state)) {
        if ((values as string[]).length > 0) {
          for (const value of values as string[]) {
            params.append(key, value);
          }
        }
      }
    }

    // Update browser URL without reloading
    const newUrl = allEmpty ? pathName : `?${params.toString()}`;

    router.push(newUrl);
  }
  setQueryString();
  const filter = searchParams.getAll("category");
  // live filter for color n material also
  // const color = searchParams.getAll("color");
  // const material = searchParams.getAll("material");
  const pageNumber = searchParams.get("page") || "1";

  function change(
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    value: string
  ) {
    if (e.target.checked) {
      dispatch({
        type: "add",
        payload: { name: name as Actions, value: value },
      });
    } else {
      dispatch({
        type: "remove",
        payload: { name: name as Actions, value: value },
      });
    }
    // router.push(`/shop/?filter=${e.target.value}`);
  }
  function getData() {
    if (filter.length === 1) {
      const value = filter[0].toLowerCase().trim();
      if (value === "furniture")
        return data.filter(
          (product) => product.category.toLowerCase() === value
        );
      else if (value === "lighting")
        return data.filter(
          (product) => product.category.toLowerCase() === value
        );
      else return data;
    } else return data;
  }
  function dataToShow() {
    if (parseInt(pageNumber) > numberOfPages) router.replace(`/shop`);
    else if (parseInt(pageNumber) === numberOfPages) {
      return products.slice((parseInt(pageNumber) - 1) * 10 + 1);
    } else {
      return products.slice(
        (parseInt(pageNumber) - 1) * 10,
        parseInt(pageNumber) * 10
      );
    }
  }

  const products = getData();
  const numberOfPages = Math.ceil(products.length / 10);
  const buttonArr = new Array(numberOfPages).fill(0);
  const dataToDisplay = dataToShow();
  return (
    <div>
      <PageHeaders text="our products" />
      <div className="relative p-3 flex flex-col lg:flex-row lg:items-start items-center gap-[20px] ">
        <div className="lg:sticky static w-full max-w-[90%] mx-auto md:max-w-none md:mx-0 md:w-[400px] px-5  top-[calc(64px+12px)]">
          <form
            action=""
            className="py-3 px-1 max-h-screen overflow-y-auto w-full overflow-x-hidden"
          >
            <AccordionRoot
              type="multiple"
              defaultValue={[`${choices[0].name}`]}
            >
              {choices.map(({ list, name }) => {
                return (
                  <AccordionItem key={name} value={name} className="">
                    <AccordionHeader
                      hasIcon
                      className="border-b border-primary"
                    >
                      <div className=" cursor-pointer text-lg font-semibold capitalize">
                        {name}
                      </div>
                    </AccordionHeader>
                    <AccordionContent animate>
                      {list.map((item) => {
                        return (
                          <div className="py-1 px-1" key={item}>
                            <input
                              type="checkbox"
                              className="scale-125 accent-primary"
                              id={item}
                              onChange={(e) => {
                                change(e, name, item);
                              }}
                              value={item}
                              // checked={filter === "furniture"}
                            />
                            <label
                              className="uppercase text-sm pl-3"
                              htmlFor={item}
                            >
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </AccordionRoot>
          </form>
        </div>
        <div className="grid max-[600px]:gap-[20px]  max-[600px]:py-[10px] max-[600px]:grid-cols-1 min-[600px]:grid-cols-2 min-[600px]:gap-x-[10%] min-[600px]:gap-y-[50px] min-[600px]:pt-[150px] px-3 flex-1  ">
          <AnimatePresence>
            {dataToDisplay &&
              dataToDisplay.map((product, index) => (
                <motion.div
                  key={`${product.name}-${product.price}`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05, duration: 1 }}
                >
                  <Card
                    image={product.images}
                    name={product.name}
                    price={product.price}
                    style={`${
                      index % 2 === 0 ? "" : "min-[600px]:-translate-y-[120px] "
                    }  w-full `}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4">
        {buttonArr.map((item, index) => (
          <Button
            key={index}
            className={`text-xl p-3 ${
              index + 1 === parseInt(pageNumber) ? "font-extrabold" : ""
            }`}
            onClick={() => {
              if (filter)
                router.push(`/shop?filter=${filter}&page=${index + 1}`);
              else {
                router.push(`/shop?page=${index + 1}`);
              }
            }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
