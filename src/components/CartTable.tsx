import { cart, ProductWithQuantity } from "@/store/cart";
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

type CartTableContextType = {
  cartItems: ProductWithQuantity[];
  totalPriceOfItemsInCart: number;
};

const CartTableContext = createContext<CartTableContextType>({
  cartItems: [],
  totalPriceOfItemsInCart: 0,
});
const CartTable = ({ children }: { children?: React.ReactNode }) => {
  const { items: cartItems, totalPriceOfItemsInCart } = useSelector(cart);

  return (
    <CartTableContext.Provider value={{ cartItems, totalPriceOfItemsInCart }}>
      <table className="w-full">{children}</table>
    </CartTableContext.Provider>
  );
};

export default CartTable;

const Header = () => {
  return (
    <thead>
      <tr className="border-b-2">
        <th className="text-start px-2 uppercase py-3">Product</th>
        <th className="text-end px-2 uppercase py-3">Subtotal</th>
      </tr>
    </thead>
  );
};

const Items = () => {
  const { cartItems } = useContext(CartTableContext);
  return (
    <>
      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <tr key={item.name} className="border-b-2">
              <td className="flex gap-2 px-2 py-3">
                <span className="uppercase">{item.name}</span>
                <span className="flex font-extrabold gap-2">
                  <span className="">x</span>
                  <span className="">{item.quantity}</span>
                </span>
              </td>
              <td className="text-end px-2 py-3">
                <span className="px-1">$</span>
                <span className="">{item.quantity * item.price}</span>
              </td>
            </tr>
          );
        })}
    </>
  );
};
const Total = () => {
  const { totalPriceOfItemsInCart } = useContext(CartTableContext);
  return (
    <>
      <tr className="border-b-2">
        <td className="text-start p-2 uppercase py-3">subtotal</td>
        <td className="text-end px-2 font-extrabold">
          <span className="px-1">$</span>
          <span className="">{totalPriceOfItemsInCart}</span>
        </td>
      </tr>
    </>
  );
};
const Shipping = () => {
  const [value, setValue] = useState<"local pickup" | "flat rate">(
    "local pickup"
  );
  return (
    <>
      <tr className="border-b-2">
        <td className="text-start p-2 uppercase py-3">shipping</td>
        <td className="text-end px-2 font-extrabold">
          <div className="flex gap-2  flex-col items-end py-2">
            <label
              htmlFor=""
              onClick={() => setValue("local pickup")}
              className=""
            >
              <input
                type="radio"
                name="shipping"
                className="accent-primary"
                checked={value === "local pickup"}
              />
              <span className="uppercase px-1 ">local pickup</span>
            </label>
            <label htmlFor="" onClick={() => setValue("flat rate")}>
              <input
                type="radio"
                name="shipping"
                className="accent-primary"
                checked={value === "flat rate"}
              />
              <span className="uppercase px-1">
                flat rate: <span className="font-extrabold ">$3</span>
              </span>
            </label>
          </div>
        </td>
      </tr>
    </>
  );
};
CartTable.Header = Header;
CartTable.Items = Items;
CartTable.Total = Total;
CartTable.Shipping = Shipping;
