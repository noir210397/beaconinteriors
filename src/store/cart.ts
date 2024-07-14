import { Product, data } from "@/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store"
export interface ProductWithQuantity {
    name: string,
    inStock: number
    quantity: number
    price: number
}
export interface Cart {
    items: ProductWithQuantity[],
    totalItemsInCart: number,
    totalPriceOfItemsInCart: number
}



const initialState: Cart = { items: [], totalItemsInCart: 0, totalPriceOfItemsInCart: 0 }

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action: PayloadAction<string>) => {
                const name = action.payload
                const itemInCart = state.items.find(item => item.name === name)
                if (!itemInCart) {
                    const product = data.find(item => item.name === name);
                    if (product) {
                        const { name, inStock, price } = product;
                        state.items.push({ name, inStock, price, quantity: 1 });
                        state.totalItemsInCart = state.items.reduce((acc, value) => {
                            return value.quantity + acc
                        }, 0)
                        state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                            return (value.quantity * value.price) + acc
                        }, 0)
                        // if (typeof window !== undefined) localStorage.setItem("cart", JSON.stringify(state))
                    }
                    else return
                }
                else {
                    itemInCart.quantity += 1
                    state.totalItemsInCart = state.items.reduce((acc, value) => {
                        return value.quantity + acc
                    }, 0)
                    state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                        return (value.quantity * value.price) + acc
                    }, 0)
                    if (typeof window !== 'undefined') localStorage.setItem("cart", JSON.stringify(state))

                }
            },
            addToCartByQuantity: (state, action: PayloadAction<{ name: string, by: number }>) => {
                const itemDetails = action.payload
                const itemInCart = state.items.find(item => item.name === itemDetails.name)
                if (!itemInCart) {
                    const product = data.find(item => item.name === itemDetails.name)
                    if (product) {
                        const { name, inStock, price } = product;
                        state.items.push({ name, inStock, price, quantity: itemDetails.by })
                        state.totalItemsInCart = state.items.reduce((acc, value) => {
                            return value.quantity + acc
                        }, 0)
                        state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                            return (value.quantity * value.price) + acc
                        }, 0)
                        if (typeof window !== 'undefined') localStorage.setItem("cart", JSON.stringify(state))
                    }
                }
                else {
                    const product = data.find(item => item.name === itemDetails.name)
                    const isOver = product!.inStock >= (itemInCart.quantity + itemDetails.by)
                    if (!isOver) { return }
                    else {
                        itemInCart.quantity += itemDetails.by
                        state.totalItemsInCart = state.items.reduce((acc, value) => {
                            return value.quantity + acc
                        }, 0)
                        state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                            return (value.quantity * value.price) + acc
                        }, 0)
                        if (typeof window !== 'undefined') localStorage.setItem("cart", JSON.stringify(state))

                    }

                }
            },
            increaseInCartByQuantity: (state, action: PayloadAction<{ name: string, by: number }>) => {
                const itemDetails = action.payload
                const itemInCart = state.items.find(item => item.name === itemDetails.name)!
                itemInCart.quantity += itemDetails.by
                state.totalItemsInCart = state.items.reduce((acc, value) => {
                    return value.quantity + acc
                }, 0)
                state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                    return (value.quantity * value.price) + acc
                }, 0)
                if (typeof window !== 'undefined') localStorage.setItem("cart", JSON.stringify(state))


            },
            clearCart: (state) => {
                if (typeof window !== `undefined`) localStorage.removeItem("cart")

                return { items: [], totalItemsInCart: 0, totalPriceOfItemsInCart: 0 }
            },
            reduceItemInCartQuantity: (state, action: PayloadAction<string>) => {
                const name = action.payload
                const itemInCart = state.items.find(item => item.name === name)
                if (itemInCart) {
                    if (itemInCart.quantity === 1) {
                        state.items = state.items.filter(item => item.name !== name)
                        state.totalItemsInCart = state.items.reduce((acc, value) => {
                            return value.quantity + acc
                        }, 0)
                        state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                            return (value.quantity * value.price) + acc
                        }, 0)
                        if (typeof window !== `undefined`) localStorage.setItem("cart", JSON.stringify(state))

                    }
                    else {
                        itemInCart.quantity -= 1
                        state.totalItemsInCart = state.items.reduce((acc, value) => {
                            return value.quantity + acc
                        }, 0)
                        state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                            return (value.quantity * value.price) + acc
                        }, 0)
                        if (typeof window !== `undefined`) localStorage.setItem("cart", JSON.stringify(state))
                    }
                }
                else return
            },
            removeItemFromCart: (state, action: PayloadAction<string>) => {
                const name = action.payload
                console.log("ran")
                const itemInCart = state.items.find(item => item.name === name)
                console.log(itemInCart?.name)
                if (itemInCart) {
                    state.items = state.items.filter(item => item.name !== name)
                    state.totalItemsInCart = state.items.reduce((acc, value) => {
                        return value.quantity + acc
                    }, 0)
                    state.totalPriceOfItemsInCart = state.items.reduce((acc, value) => {
                        return (value.quantity * value.price) + acc
                    }, 0)
                    if (typeof window !== `undefined`) localStorage.setItem("cart", JSON.stringify(state))
                }
            },
            setCart: (state, action: PayloadAction<Cart>) => {
                console.log("done")
                return state = action.payload
            }
        }
    }
)
export const cart = (state: RootState) => state.cart
export const { addToCart, addToCartByQuantity, clearCart, reduceItemInCartQuantity, removeItemFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer