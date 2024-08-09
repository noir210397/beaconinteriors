import { Product, data } from "@/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store"
import { toast } from "sonner";
// export interface ProductWithQuantity {
//     name: string,
//     inStock: number
//     quantity: number
//     price: number
// }
export type Saved = string[]



const initialState: Saved = []

const savedSlice = createSlice(
    {
        name: "saved",
        initialState,
        reducers: {
            addToSaved: (state, action: PayloadAction<string>) => {
                const isItem = state.find(item => item.toLowerCase() === action.payload.toLowerCase())
                if (!isItem) {
                    state.push(action.payload)
                    toast.success(`${action.payload} added to saved`)
                    if (typeof window !== undefined) localStorage.setItem("saved", JSON.stringify(state))
                }
                else {
                    toast.error(`${action.payload} is already saved`)

                }

            },
            removeFromSaved: (state, action: PayloadAction<string>) => {
                const isItem = state.find(item => item.toLowerCase() === action.payload.toLowerCase())
                if (isItem) {
                    const newState = state.filter(item => item.toLowerCase() !== action.payload.toLowerCase())
                    toast.error(`${action.payload} removed from saved items`)
                    if (typeof window !== undefined) localStorage.setItem("saved", JSON.stringify(newState))
                    return newState
                }
                else { return }
            }
            ,
            clearSaved: (state) => {
                if (typeof window !== undefined) localStorage.removeItem("saved")
                return []

            },
            setSaved: (state, action: PayloadAction<Saved>) => {
                return state = action.payload
            }
        }
    }
)
export const saved = (state: RootState) => state.saved
export const { addToSaved, removeFromSaved, clearSaved, setSaved } = savedSlice.actions

export default savedSlice.reducer