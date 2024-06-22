import { Product, data } from "@/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface ProductWithQuantity extends Product {
    quantity: number
}
function getItem(): false | ProductWithQuantity[] {
    const cartItem = localStorage.getItem("cart");

    if (cartItem) {
        try {
            return JSON.parse(cartItem);
        } catch (error) {
            // console.error("Error parsing cart item:", error);
            return false; // or handle the error as needed
        }
    } else {
        return false;
    }
}

const initialState: [] | ProductWithQuantity[] = getItem() || []

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action: PayloadAction<string>) => {
                const name = action.payload
                const itemInCart = state.find(item => item.name === name)
                if (!itemInCart) {
                    const item = data.find(item => item.name === name);
                    if (item) {
                        state.push({ ...item, quantity: 1 });
                    }
                    else return
                }
                else {
                    itemInCart.quantity += 1
                }
            },
            addToCartByQuantity: (state, action: PayloadAction<{ name: string, by: number }>) => {
                const itemDetails = action.payload
                const itemInCart = state.find(item => item.name === itemDetails.name)
                if (!itemInCart) {
                    const item = data.find(item => item.name === itemDetails.name)
                    if (item)
                        state.push({ ...item, quantity: itemDetails.by })
                }
                else {
                    itemInCart.quantity += itemDetails.by
                }
            },
            clearCart: (state) => {
                return []
            },
            reduceItemInCartQuantity: (state, action: PayloadAction<string>) => {
                const name = action.payload
                const itemInCart = state.find(item => item.name === name)
                if (itemInCart) {
                    if (itemInCart.quantity === 1) return state.filter(item => item.name !== name)
                    else itemInCart.quantity -= 1
                }
                else return
            },
            removeItemFromCart: (state, action: PayloadAction<string>) => {
                const name = action.payload
                const itemInCart = state.find(item => item.name === name)
                if (itemInCart) return state.filter(item => item.name !== name)
            }
        }
    }
)
export const cart = (state: RootState) => state.cart
export const { addToCart, addToCartByQuantity, clearCart, reduceItemInCartQuantity, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer