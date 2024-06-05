import { StaticImageData } from "next/image"
import image from "../public/images/shop/alano armchair.jpg"
import image1 from "../public/images/shop/klismos chair.jpg"
import image2 from "../public/images/shop/marble side table.jpg"
import image3 from "../public/images/shop/mercel swivel arm chair.jpg"
import image4 from "../public/images/shop/serprnt sofa.jpg"
import image5 from "../public/images/shop/wooden cofee table.jpg"
import image6 from "../public/images/shop/glass dining table.jpeg"
import image7 from "../public/images/shop/vintage chair.jpg"
import image8 from "../public/images/shop/modern sofa.jpg"
import image9 from "../public/images/shop/shelf.jpg"
import image10 from "../public/images/shop/recliner.jpg"
import image11 from "../public/images/shop/bedframe.jpg"
import image12 from "../public/images/shop/nightstand.jpg"
import image13 from "../public/images/shop/desk.jpg"
import image14 from "../public/images/shop/marble table.jpg"
import image15 from "../public/images/shop/dusk floor lamp.webp"
import image152 from "../public/images/shop/dusk floor lamp 2.webp"
import image16 from "../public/images/shop/shelf floor lamp 2.jpg"
import image162 from "../public/images/shop/shelf floor lamp.webp"
import image17 from "../public/images/shop/sendai floor lamp.webp"
import image172 from "../public/images/shop/sendai floor lamp 2.jpg"
import image18 from "../public/images/shop/rattan floor lamp.webp"
import image182 from "../public/images/shop/rattan floor lamp 2.webp"
import image19 from "../public/images/shop/arch floor lamp.webp"
import image192 from "../public/images/shop/arch floor lamp 2.jpg"
import image20 from "../public/images/shop/shizuka lamp.webp"
import image202 from "../public/images/shop/shizuka lamp.webp"
import image21 from "../public/images/shop/wells floor lamp.webp"
import image212 from "../public/images/shop/wells floor lamp 2.webp"
import image31 from "../public/images/shop/gammel table.webp"
import image312 from "../public/images/shop/gammel table 2.webp"
import image41 from "../public/images/shop/weave lamp.jpg"
import image412 from "../public/images/shop/weave lamp 2.jpg"
import image51 from "../public/images/shop/slater desk.jpg"
import image512 from "../public/images/shop/slater desk 2.jpg"
import image61 from "../public/images/shop/gold lamp.webp"
import image612 from "../public/images/shop/gold lamp 2.jpg"

import { v4 as uuid } from "uuid"





export interface Product {
    name: string,
    price: number,
    description: string,
    inStock: number,
    shortDescription: string,
    dimensions?: string,
    category: "Furniture" | "Lighting",
    images: StaticImageData | StaticImageData[]
}

export const data: Product[] = [
    {
        name: "Alano Armchair",
        price: 1500,
        description: 'The Alano Armchair is a stylish and contemporary piece of furniture designed to add a touch of elegance and comfort to any living space. Characterized by its sleek lines and minimalist design, the Alano Armchair typically features a sturdy frame crafted from high-quality wood or metal, providing both durability and aesthetic appeal. The seat and backrest are often upholstered in premium fabric or leather, offering a plush and inviting surface for relaxation. Its ergonomic design ensures optimal support and comfort, making it an ideal choice for both casual and formal settings. With its blend of modern sophistication and functional design, the Alano Armchair is a versatile addition to any home or office decor.',
        inStock: 2,
        shortDescription: `
        The Alano Armchair combines sleek design and plush comfort, featuring premium upholstery and a sturdy frame for stylish, modern seating.`,
        category: "Furniture",
        dimensions: "CM| L:80 D:80 H:81",
        images: image,
    },
    {
        name: "Klismos Chair",
        price: 249.99,
        description: "The Klismos Chair is a timeless piece, featuring elegantly curved legs and a comfortable, contoured backrest. Its classical design is inspired by ancient Greek furniture, offering both aesthetic appeal and ergonomic support. Perfect for any setting, from dining rooms to reading nooks.",
        inStock: 15,
        shortDescription: "Elegant, ergonomic chair inspired by ancient Greek design.",
        dimensions: "30\" H x 22\" W x 23\" D",
        category: "Furniture",
        images: image1,
    },
    {
        name: "Marble Side Table",
        price: 199.99,
        description: "The Marble Side Table combines luxurious marble with a sleek metal frame, creating a sophisticated and functional piece. Ideal for living rooms, bedrooms, or offices, this table offers both style and durability. Its compact size makes it perfect for smaller spaces while still providing ample surface area.",
        inStock: 28,
        shortDescription: "Luxurious marble table with sleek metal frame.",
        dimensions: "20\" H x 18\" W x 18\" D",
        category: "Furniture",
        images: image2
    },
    {
        name: "Mercel Swivel Arm Chair",
        price: 329.99,
        description: "The Mercel Swivel Arm Chair offers modern elegance with its sleek design and smooth swivel functionality. Upholstered in premium fabric, it features a comfortable padded seat and backrest. Ideal for office or home use, this chair provides both style and ergonomic support.",
        inStock: 275,
        shortDescription: "Modern swivel arm chair with premium upholstery.",
        dimensions: "35\" H x 28\" W x 30\" D",
        category: "Furniture",
        images: image3
    },
    {
        name: "Serpent Sofa",
        price: 899.99,
        description: "The Serpent Sofa features a bold, serpentine design that adds a touch of modern sophistication to any living space. Upholstered in luxurious fabric with plush cushioning, this sofa offers exceptional comfort and style. Perfect for large living rooms or as a statement piece.",
        inStock: 175,
        shortDescription: "Bold, serpentine sofa with luxurious fabric upholstery.",
        dimensions: "34\" H x 85\" W x 38\" D",
        category: "Furniture",
        images: image4
    },
    {
        "name": "Wooden Coffee Table",
        "price": 149.99,
        "description": "The Wooden Coffee Table features a rich wood finish and a modern design. Perfect for any living room, it offers both style and functionality with ample surface area and a sturdy build.",
        "inStock": 15,
        "shortDescription": "Modern wooden coffee table.",
        "dimensions": "18\" H x 24\" W x 24\" D",
        "category": "Furniture",
        "images": image5
    },
    {
        "name": "Glass Dining Table",
        "price": 499.99,
        "description": "The Glass Dining Table boasts a sleek glass top with a sturdy metal frame. Perfect for any dining room, it offers a contemporary look while being highly functional and durable.",
        "inStock": 10,
        "shortDescription": "Contemporary glass dining table.",
        "dimensions": "30\" H x 60\" W x 36\" D",
        "category": "Furniture",
        "images": image6
    },
    {
        "name": "Vintage Chair",
        "price": 89.99,
        "description": "The Vintage Chair combines classic design with comfort. Made from high-quality wood, this chair is perfect for any dining room or kitchen, adding a touch of elegance and durability.",
        "inStock": 20,
        "shortDescription": "Classic wooden chair.",
        "dimensions": "35\" H x 18\" W x 20\" D",
        "category": "Furniture",
        "images": image7
    },
    {
        "name": "Modern Sofa",
        "price": 699.99,
        "description": "The Modern Sofa offers a sleek design with plush cushions, providing both comfort and style. Ideal for any living room, this sofa is durable and perfect for relaxation.",
        "inStock": 5,
        "shortDescription": "Sleek and comfortable modern sofa.",
        "dimensions": "34\" H x 80\" W x 35\" D",
        "category": "Furniture",
        "images": image8
    },
    {
        "name": "Rustic Bookshelf",
        "price": 299.99,
        "description": "The Rustic Bookshelf features a charming wood finish and multiple shelves, perfect for storing books, decor, and more. Its sturdy construction and classic design make it a versatile addition to any room.",
        "inStock": 12,
        "shortDescription": "Charming rustic bookshelf.",
        "dimensions": "72\" H x 36\" W x 12\" D",
        "category": "Furniture",
        "images": image9
    },
    {
        "name": "Leather Recliner",
        "price": 399.99,
        "description": "The Leather Recliner offers ultimate comfort with its plush seating and reclining feature. Made from high-quality leather, this recliner is perfect for any living room or office.",
        "inStock": 8,
        "shortDescription": "Comfortable leather recliner.",
        "dimensions": "40\" H x 36\" W x 38\" D",
        "category": "Furniture",
        "images": image10
    },
    {
        "name": "Elegant Bed Frame",
        "price": 599.99,
        "description": "The Elegant Bed Frame combines a sleek design with sturdy construction. Perfect for any bedroom, this bed frame offers both style and durability, ensuring a good night's sleep.",
        "inStock": 7,
        "shortDescription": "Sleek and sturdy bed frame.",
        "dimensions": "50\" H x 60\" W x 80\" D",
        "category": "Furniture",
        "images": image11
    },
    {
        "name": "Minimalist Nightstand",
        "price": 129.99,
        "description": "The Minimalist Nightstand features a simple yet elegant design, offering a perfect balance of style and functionality. Ideal for any bedroom, this nightstand includes a drawer and open shelf for storage.",
        "inStock": 25,
        "shortDescription": "Simple and elegant nightstand.",
        "dimensions": "24\" H x 20\" W x 18\" D",
        "category": "Furniture",
        "images": image12
    },
    {
        "name": "Office Desk",
        "price": 249.99,
        "description": "The Office Desk provides a spacious work surface and a sleek design. Perfect for any home office, it offers ample storage with drawers and shelves, keeping your workspace organized and efficient.",
        "inStock": 30,
        "shortDescription": "Spacious and sleek office desk.",
        "dimensions": "30\" H x 48\" W x 24\" D",
        "category": "Furniture",
        "images": image13
    },
    {
        "name": "Marble Side Table Recliner",
        "price": 209.99,
        "description": "The Marble Side Table combines luxurious marble with a sleek metal frame, creating a sophisticated and functional piece. Ideal for living rooms, bedrooms, or offices, this table offers both style and durability. Its compact size makes it perfect for smaller spaces while still providing ample surface area.",
        "inStock": 28,
        "shortDescription": "Luxurious marble table Recliner with sleek metal frame.",
        "dimensions": "20\" H x 18\" W x 18\" D",
        "category": "Furniture",
        "images": image14
    },
    {
        "name": "DUSK FLOOR LAMP",
        "price": 130.99,
        "description": `The slender Dusk Floor Lamp fills your space with warm light and streamlined style. Featuring a tall fabric shade, this lamp is anchored by a sturdy walnut base that draws the eye and supports the artistic, slender stem. 
        *Limited quantities available. For store availability contact your local showroom.`,
        "inStock": 23,
        "shortDescription": "Able to be paired with any number of styles, the Dusk Lamp can seamlessly make the transition from mid-century decor to classic modern style.",
        "dimensions": `8"W x 8"D x 62"H`,
        "category": "Lighting",
        "images": [image15, image152]
    },
    {
        "name": "LUZ SHELF FLOOR LAMP",
        "price": 159,
        "description": `The Luz Shelf Floor Lamp brings soft light and striking mid-century style to your space. Place this lamp in any room of your home or office and enjoy the way it brings both warm illumination and welcome functionality to your space.`,
        "inStock": 18,
        "shortDescription": "Three white opal glass shades illuminate dual glass shelves, conveniently placed at different heights so as to offer artistic style and the opportunity to keep your chosen belongings easily within your reach.",
        "dimensions": `10"W x 10"D`,
        "category": "Lighting",
        "images": [image16, image162]
    },
    {
        "name": "SENDAI FLOOR LAMP",
        "price": 159,
        "description": `A true statement piece, the sleek Sendai Floor Lamp fills your space with streamlined modern design. A linear wooden base runs the length of the neutral-toned lampshade, giving a sense of airiness that is complemented by the light this lamp brings to your space.`,
        "inStock": 52,
        "shortDescription": "",
        "dimensions": `9"W x 9"D x 47"H`,
        "category": "Lighting",
        "images": [image17, image172]
    },
    {
        "name": "Rattan Table Lamp",
        "price": 199,
        "description": `The Rattan Table Lamp is crafted from organic reeds that surround a fabric shade. This enchanting lamp brings a sense of whimsy to your space, and the design of the natural reeds used in tandem with the fabric shade evokes thoughts of minimalistic Scandinavian style. Add this lamp to your space to illuminate your room and invoke a sense of hygge.`,
        "inStock": 21,
        "shortDescription": "",
        "dimensions": `11.8"W x 11.8"D x 59"H`,
        "category": "Lighting",
        "images": [image18, image182]
    },
    {
        "name": "LIGHT ARCH FLOOR LAMP",
        "price": 250,
        "description": `The Jan 3-Light Arch Lamp serves your need to brighten many corners of your space. Three individual textured fabric shades are gracefully suspended in place, making this lamp an ideal addition to any large room that would benefit from soft illumination. The unique design and neutral finish of this lamp make it a seamless addition to any room; expect to stylishly blend this lamp with your existing decor with ease.`,
        "inStock": 6,
        "shortDescription": "",
        "dimensions": `13.75"W x 13.75"D x 82"H`,
        "category": "Lighting",
        "images": [image19, image192]
    },
    {
        "name": "SHIZUKA WOODEN FLOOR LAMP",
        "price": 139,
        "description": `Artfully designed, the Shizuka Floor Lamp gets noticed. Crafted of Kumo paper with a solid pine base, this attractive lighting fuses the classic lantern with modern design. Three lanterns are arranged vertically offering clean lines ready to occupy a special place in your space.`,
        "inStock": 17,
        "shortDescription": "",
        "dimensions": `8.25"W x 8.25"W x 61"H`,
        "category": "Lighting",
        "images": [image20, image202]
    },
    {
        "name": "WELLS FLOOR LAMP",
        "price": 350,
        "description": `The Wells Floor Lamp is as classically mid-century as it is eye-catching. Featuring six individual white opal glass shades, this lamp brings a sense of dynamic movement and iconic style to your space. Place this lamp anywhere in your home or office and enjoy the way it softly brightens and illuminates. Let the striking style of this lamp tie your space together while it anchors your mid-century decor.`,
        "inStock": 103,
        "shortDescription": "",
        "dimensions": `9"W x 9"D x 63.5"H`,
        "category": "Lighting",
        "images": [image21, image212]
    },
    {
        "name": `GAMMEL 79 DINING TABLE`,
        "price": 319,
        "description": `Made in Italy from eco-friendly recycled materials, the Gammel Dining Table embodies simple, understated elegance. Neutral colors and linear look bring a light and airy aesthetic to your dining space, while strong eco-friendly recycled materials ensure longevity. A durable, easily-cleaned melamine surface is designed to mirror the look of real wood complete with intentional, rustic saw marks that highlight the natural characteristics of this piece, while matte white metal legs support the natural wood-styled top for a versatile and modern aesthetic. Dress up this key dining room piece with chairs that display an intricate design, or keep it casual with a seat that mimics the minimalistic lines. The melamine surfaces of this piece are designed to mirror the look of real wood complete with intentional, rustic saw marks.`,
        "inStock": 64,
        "shortDescription": "",
        "dimensions": `79"W x 36"D x 29.5"H`,
        "category": "Furniture",
        "images": [image31, image312]
    },
    {
        "name": `BASKET WEAVE TABLE LAMP`,
        "price": 69,
        "description": `The Basket Weave Table Lamp brings a rustic, textural component to your space. The base of this piece is crafted from woven wicker and topped by a fabric shade. Add this lamp to your home and enjoy the way the way it illuminates your desk, nightstand or table with soft, warm light.`,
        "inStock": 11,
        "shortDescription": "",
        "dimensions": `15.7"W x 15.7"D x 22.8"H`,
        "category": "Lighting",
        "images": [image41, image412]
    },
    {
        "name": `SLATER RECEPTION DESK`,
        "price": 349,
        "description": `The Slater Reception Desk features a streamlined, contemporary profile that’s extremely versatile. And like the entire Slater Collection, it’s designed with contrasting light-and-dark wood tones and matte, textured wood grain melamine veneer, so it will fit into nearly any aesthetic for seamless styling at an exceptional value.`,
        "inStock": 15,
        "shortDescription": "",
        "dimensions": `72.6"W x 27.6"D x 44.7"H`,
        "category": "Furniture",
        "images": [image51, image512]
    },
    {
        "name": `GOLDEN DOME TABLE LAMP`,
        "price": 99,
        "description": `The Golden Dome Table Lamp brings classic mid-century modern style to your space. This antique gold painted lamp features a classic base shape with an eye-catching dome, complete with air vents to prevent overheating. Add to your space to bring a sense of refined mid-century style to your decor, and enjoy the way the additional light in your room warms and illuminates.`,
        "inStock": 201,
        "shortDescription": "",
        "dimensions": `11.8"W x 11.8"D x 19.5"H`,
        "category": "Lighting",
        "images": [image61, image612]
    },
]
export function randNum(n: number, numArr?: number[]) {
    const arr = numArr || []

    if (arr.length >= n) {
        return arr;
    } else {
        const num = Math.floor(Math.random() * 25);
        if (
            !arr.find((item) => {
                return item === num;
            })
        ) {
            arr.push(num);
        }
        return randNum(n, arr);

    }
}
// randNum(8, numArr)
export function getData(arr: number[]) {
    console.log("running");

    const neededData = arr.map(num => ({ ...data[num], id: uuid() })) satisfies Product[]
    return neededData
}
// randNum(6, numArr)
// console.log(getData(numArr))









