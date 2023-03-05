import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Premium Quality",
    text: "Our phone cases are made with the highest quality materials, providing superior protection against damage from drops, scratches, and other impacts.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Sleek and Stylish",
    text: "Our cases are not only functional, but also stylish and trendy, with a range of designs and colors to choose from to fit your unique style.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Affordable Pricing",
    text: "Despite our commitment to quality and style, our phone cases are priced affordably, making them a great value for our customers.",
  },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/single-product?id=`;
