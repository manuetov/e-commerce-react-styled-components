import React from "react";
import { 
  GiCompass, 
  GiDiamondHard, 
  GiStabbedNote 
} from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Acerca de",
    url: "/about",
  },
  {
    id: 3,
    text: "productos",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "misión",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "historia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

//export const products_url = "https://course-api.com/react-store-products";
export const products_url = '/.netlify/functions/products'

//export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `/.netlify/functions/single-product?id=`
