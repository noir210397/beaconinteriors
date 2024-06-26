import Image, { StaticImageData } from "next/image";
import CartDeleteButton from "./CartDeleteButton";
import { data } from "@/products";
interface CartCardProps {
  //   image: StaticImageData | StaticImageData[];
  name: string;
  price: number;
  quantity: number;
}

const CartCard = ({ name, price, quantity }: CartCardProps) => {
  const imageData = data.find((item) => item.name === name)!.images;
  const imageSrc = Array.isArray(imageData) ? imageData[0] : imageData;
  return (
    <div className="flex w-full md:w-[95%] mx-auto border-2 border-red-700 mb-4">
      <div className="flex-1 flex items-start">
        <CartDeleteButton itemName={name} className="text-primary mt-2" />
        <div>
          <div className="text-lg font-bold">{name}</div>
          <div className="flex-1 flex items-center">
            <span>{quantity} </span>
            <span className="px-4">x</span>
            <span> $ {price}</span>
          </div>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={`${name}`}
        className="object-cover w-1/2 h-[150px]"
      />
    </div>
  );
};

export default CartCard;
