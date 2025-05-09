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
import { data, Product } from "@/products";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Reducer, useEffect, useReducer } from "react";

type Actions = "category" | "color" | "material" | "page";

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
  { name: "category", list: ["furniture", "lighting"] },
  { name: "material", list: materials },
  { name: "color", list: colors },
];

type ActionType = {
  type: "add" | "remove";
  payload: { name: Actions; value: string };
};

type SearchState = {
  category: string[];
  color: string[];
  material: string[];
  page: string;
};

function reducer(state: SearchState, action: ActionType): SearchState {
  const { name, value } = action.payload;
  switch (action.type) {
    case "add":
      return {
        ...state,
        [name]: name === "page" ? value : [...(state[name] as string[]), value],
        page: name === "page" ? value : "1",
      };
    case "remove":
      return {
        ...state,
        [name]: (state[name] as string[]).filter((item) => item !== value),
        page: "1",
      };
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
}

const Shop = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const getInitialState = (): SearchState => ({
    category: searchParams.getAll("category") || [],
    color: searchParams.getAll("color") || [],
    material: searchParams.getAll("material") || [],
    page: searchParams.get("page") || "1",
  });

  const [state, dispatch] = useReducer<Reducer<SearchState, ActionType>>(
    reducer,
    getInitialState()
  );

  const setQueryString = () => {
    const params = new URLSearchParams();
    for (const [key, values] of Object.entries(state)) {
      if (Array.isArray(values)) {
        values.forEach((value) => params.append(key, value));
      } else {
        if (values !== "1") {
          params.append(key, values);
        }
      }
    }
    return `?${params.toString()}`;
  };

  useEffect(() => {
    router.replace(`${pathName}${setQueryString()}`);
  }, [state]);

  const change = (
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    value: string
  ) => {
    const lower = value.toLowerCase();
    if (e.target.checked) {
      dispatch({
        type: "add",
        payload: { name: name as Actions, value: lower },
      });
    } else {
      dispatch({
        type: "remove",
        payload: { name: name as Actions, value: lower },
      });
    }
  };

  const getFilteredData = () => {
    let products = data;

    if (state.category.length) {
      products = products.filter((p) =>
        state.category.includes(p.category.toLowerCase())
      );
    }

    // if (state.color.length) {
    //   products = products.filter((p) =>
    //     p.colors?.some((color) => state.color.includes(color.toLowerCase()))
    //   );
    // }

    // if (state.material.length) {
    //   products = products.filter((p) =>
    //     state.material.includes(p.material?.toLowerCase() || "")
    //   );
    // }

    return products;
  };

  const products = getFilteredData();
  const numberOfPages = Math.ceil(products.length / 10);
  const pageNumber = parseInt(state.page);
  const buttonArr = Array.from({ length: numberOfPages });

  const dataToDisplay = products.slice((pageNumber - 1) * 10, pageNumber * 10);
  console.log(dataToDisplay);

  return (
    <div>
      <PageHeaders text="our products" />
      <div className="relative p-3 flex flex-col lg:flex-row lg:items-start items-center gap-[20px] ">
        <div className="lg:sticky static w-full max-w-[90%] mx-auto md:max-w-none md:mx-0 md:w-[400px] px-5  top-[calc(64px+12px)]">
          <form className="py-3 px-1 max-h-screen overflow-y-auto w-full overflow-x-hidden">
            <AccordionRoot type="multiple" defaultValue={[choices[0].name]}>
              {choices.map(({ list, name }) => (
                <AccordionItem key={name} value={name}>
                  <AccordionHeader hasIcon className="border-b border-primary">
                    <div className="cursor-pointer text-lg font-semibold capitalize">
                      {name}
                    </div>
                  </AccordionHeader>
                  <AccordionContent animate>
                    {list.map((item) => {
                      const values = state[
                        name as keyof SearchState
                      ] as string[];
                      const isChecked = values.includes(item.toLowerCase());
                      return (
                        <div className="py-1 px-1" key={item}>
                          <input
                            type="checkbox"
                            className="scale-125 accent-primary"
                            id={`${name}-${item}`}
                            onChange={(e) => change(e, name, item)}
                            value={item}
                            checked={isChecked}
                          />
                          <label
                            className="uppercase text-sm pl-3"
                            htmlFor={`${name}-${item}`}
                          >
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </form>
        </div>
        <div className="grid max-[600px]:gap-[20px]  max-[600px]:py-[10px] max-[600px]:grid-cols-1 min-[600px]:grid-cols-2 min-[600px]:gap-x-[10%] min-[600px]:gap-y-[50px] min-[600px]:pt-[150px] px-3 flex-1">
          <AnimatePresence>
            {dataToDisplay.map((product, index) => (
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
                    index % 2 === 0 ? "" : "min-[600px]:-translate-y-[120px]"
                  } w-full`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4">
        {buttonArr.map((_, index) => (
          <Button
            key={index}
            className={`text-xl p-3 ${
              index + 1 === pageNumber ? "font-extrabold" : ""
            }`}
            onClick={() =>
              dispatch({
                type: "add",
                payload: { name: "page", value: `${index + 1}` },
              })
            }
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
