import { StaticImageData } from "next/image"
import image from "../public/images/shop/alano armchair.jpg"
import image1 from "../public/images/shop/klismos chair.jpg"
import image2 from "../public/images/shop/marble side table.jpg"
import image3 from "../public/images/shop/mercel swivel arm chair.jpg"
import image4 from "../public/images/shop/serprnt sofa.jpg"





interface Product {
    name: string,
    price: number,
    description: string,
    inStock: number,
    shortDescription: string,
    dimensions?: string,
    category?: string,
    images: StaticImageData | StaticImageData[]
}
const products: Product[] = [
    {
        name: "alano armchair",
        price: 1500,
        description: 'The Alano Armchair is a stylish and contemporary piece of furniture designed to add a touch of elegance and comfort to any living space. Characterized by its sleek lines and minimalist design, the Alano Armchair typically features a sturdy frame crafted from high-quality wood or metal, providing both durability and aesthetic appeal. The seat and backrest are often upholstered in premium fabric or leather, offering a plush and inviting surface for relaxation. Its ergonomic design ensures optimal support and comfort, making it an ideal choice for both casual and formal settings. With its blend of modern sophistication and functional design, the Alano Armchair is a versatile addition to any home or office decor.',
        inStock: 2,
        shortDescription: `
        The Alano Armchair combines sleek design and plush comfort, featuring premium upholstery and a sturdy frame for stylish, modern seating.`,
        category: "furniture",
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
]