"use client";

import PageHeaders from "@/components/PageHeaders";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useSelector } from "react-redux";
import SavedCard from "@/components/home/SavedCard";
import { saved } from "@/store/saved";

const Page = () => {
  const savedItems = useSelector(saved);

  return (
    <div>
      <PageHeaders text="my wishlist" />
      {savedItems.length === 0 && (
        <div className="w-[90%] mx-auto py-5">
          <div className="bg-white px-4  h-[50px] flex items-center relative text-primary capitalize ">
            <div className="absolute h-1 top-0 inset-x-0 bg-mydark"></div>
            <AiTwotoneCalendar className="text-2xl mr-2" /> your currently have
            no saved items
          </div>
          <Link
            href={`/shop`}
            className="p-2 uppercase bg-primary text-white block w-fit rounded-lg mt-[20px]"
          >
            return to shop
          </Link>
        </div>
      )}
      {savedItems.length > 0 && (
        <table className="w-[90%] mx-auto">
          <thead>
            <tr className="max-[650px]:hidden">
              <th className="uppercase text-xl font-normal"></th>
              <th className="uppercase text-xl font-normal">product name</th>
              <th className="uppercase text-xl font-normal">unit price</th>
            </tr>
          </thead>
          <tbody>
            {savedItems.map((savedItem) => (
              <SavedCard saved={savedItem} key={savedItem} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page;
