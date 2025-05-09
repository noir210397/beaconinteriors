import { StaticImageData } from "next/image";

export interface CardType {
    image: StaticImageData[],
    price: number,
    name: string,
    style?: string
}