import { BsFillTrash3Fill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import RemoveFromCartButton from "../RemoveFromCartButton";
import { ProductWithQuantity } from "@/store/cart";
import { data } from "@/products";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { removeFromSaved } from "@/store/saved";
import { addToCart } from "@/store/cart";

const SavedCard = ({ saved }: { saved: string }) => {
  const { name, price } = data.find((item) => item.name === saved)!;
  const imageData = data.find((item) => item.name === name)!.images;
  const imageSrc = Array.isArray(imageData) ? imageData[0] : imageData;
  const dispatch = useAppDispatch();

  return (
    <tr className=" min-[650px]:border-b min-[650px]:border-b-black cursor-pointer">
      <td className="max-[650px]:hidden text-center px-2">
        <button
          className="text-3xl font-extrabold"
          onClick={() => dispatch(removeFromSaved(name))}
        >
          <GiCancel />
        </button>
      </td>
      <td className="max-[650px]:hidden py-10 flex gap-10 items-center min-w-[50%]">
        <Image
          src={imageSrc}
          alt={name}
          className="w-32 aspect-square object-contain"
        />
        <p className="text-xl">{name}</p>
      </td>
      <td className="max-[650px]:hidden text-center px-2 min-w-[30%]">
        $ {price}
      </td>

      <td className="min-[650px]:hidden border-b-2">
        <div className="w-full flex justify-center items-center flex-col py-8 relative">
          <Image
            src={imageSrc}
            alt={name}
            className="w-28 aspect-square object-cover"
          />
          <p className="text-lg">{name}</p>
          <p className="text-sm">
            <span className="font-bold uppercase ">price:</span>
            <span> $ {price}</span>
          </p>

          <button
            onClick={() => dispatch(addToCart(name))}
            className="border-primary capitalize border px-4 py-2 rounded block w-fit my-2"
          >
            add to cart
          </button>
          <button
            className="text-gray-600 absolute right-3 bottom-[40px] text-lg p-2"
            onClick={() => dispatch(removeFromSaved(name))}
          >
            <BsFillTrash3Fill />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SavedCard;
