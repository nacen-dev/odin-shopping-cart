import { IProduct } from "./components/Product/Product";
import bananaLoaf from "./assets/banana-choco-chip-loaf.jpg";
import meatLoaf from './assets/meat-loaf.jpeg'
import chickenKaraage from './assets/chicken-karaage.jpg'
import salisburySteak from './assets/salisbury-steak.jpg';
import salmonSushiBake from './assets/sushi-bake.webp';
import texMexMacaroni from './assets/tex-mex-macaroni.jpg';
import roastCornSalsa from './assets/roast-corn-salsa.jpeg';
import hainaneseChicken from './assets/hainanese-chicken.webp';
import lemonPepperChicken from './assets/lemon-pepper-chicken.jpg';


export const productListData: IProduct[] = [
  { image: bananaLoaf, name: "Banana Choco Chip Loaf", price: 5 },
  { image: meatLoaf, name: "Meat Loaf", price: 5 },
  { image: chickenKaraage, name: "Chicken Karaage", price: 5 },
  { image: texMexMacaroni, name: "Tex Mex Macaroni", price: 4 },
  { image: salisburySteak, name: "Salisbury Steak", price: 5 },
  { image: salmonSushiBake, name: "Salmon Sushi Bake", price: 7 },
  { image: roastCornSalsa, name: "Roast Corn Salsa", price: 3 },
  { image: hainaneseChicken, name: "Hainanese Chicken", price: 5 },
  { image: lemonPepperChicken, name: "Lemon Pepper Chicken", price: 5 },
];
