import { GiCancel } from "react-icons/gi";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { ProductWithQuantity } from "@/store/cart";
import { data } from "@/products";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPageCard = ({
  inStock,
  name,
  price,
  quantity,
  borderBottom,
}: ProductWithQuantity & { borderBottom?: boolean }) => {
  const images = data.find((item) => item.name === name)!.images;
  const router = useRouter();
  const navigate = () => {
    router.push(`/product/${name.replaceAll(" ", "-").toLowerCase()}`);
  };

  return (
    <tr
      key={name}
      className={` ${
        !borderBottom ? "min-[650px]:border-b min-[650px]:border-b-black" : ""
      }`}
    >
      <td className="max-[650px]:hidden py-10">
        <Image
          src={images[0]}
          alt={name}
          className="w-32 aspect-square object-contain"
        />
      </td>
      <td className="max-[650px]:hidden uppercase text-lg px-2">{name}</td>
      <td className="max-[650px]:hidden text-center px-2">$ {price}</td>
      <td className="max-[650px]:hidden text-center px-2">{quantity}</td>
      <td className="max-[650px]:hidden text-center px-2">
        $ {price * quantity}
      </td>
      <td className={`max-[650px]:hidden text-center px-2 `}>
        <RemoveFromCartButton
          className="text-2xl font-extrabold"
          itemName={`${name}`}
        >
          <GiCancel />
        </RemoveFromCartButton>
      </td>
      <td className="min-[650px]:hidden">
        <table className="w-full">
          <tbody>
            <tr className=" border-b border-b-black">
              <td className="uppercase font-extrabold pr-3 py-4">product:</td>
              <td onClick={navigate} className="text-end uppercase">
                {name}
              </td>
            </tr>
            <tr className=" border-b border-b-black">
              <td className="uppercase font-extrabold pr-3 py-4">price:</td>
              <td className="text-end font-semibold">{price}</td>
            </tr>
            <tr className=" border-b border-b-black">
              <td className="uppercase font-extrabold pr-3 py-4">quantity:</td>
              <td className="text-end font-semibold">{quantity}</td>
            </tr>
            <tr className=" border-b border-b-black">
              <td className="uppercase font-extrabold pr-3 py-4">subtotal:</td>
              <td className="text-end font-semibold">{price * quantity}</td>
            </tr>
            <tr className=" border-b border-b-black">
              <td className="uppercase font-extrabold pr-3 py-4">
                <RemoveFromCartButton
                  className="text-2xl "
                  itemName={`${name}`}
                >
                  <GiCancel />
                </RemoveFromCartButton>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default CartPageCard;
