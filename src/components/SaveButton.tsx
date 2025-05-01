"use client";
import { AiFillHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToSaved } from "@/store/saved";
import { ComponentProps, MouseEvent, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "sonner";

type Props = ComponentProps<"button"> & {
  itemName: string;
  checkSaved?: boolean;
};

const SaveButton = ({ className, itemName, checkSaved, ...rest }: Props) => {
  const dispatch = useAppDispatch();
  const saved = useAppSelector((state) => state.saved).find(
    (item) => item.toLowerCase() === itemName.toLowerCase()
  );

  function save(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    dispatch(addToSaved(itemName));
  }
  return (
    <button
      {...rest}
      className={`text-3xl  text-primary ${className}`}
      onClick={save}
    >
      {checkSaved && saved ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default SaveButton;
