export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    price: 120,
    image: "/product/WirelessHeadphones.webp",
  },
  {
    id: 2,
    name: "Smart Watch",
    description:
      "Track your fitness, monitor your heart rate, and stay connected on the go.",
    price: 90,
    image: "/product/SmartWatch.jpg",
  },
];
