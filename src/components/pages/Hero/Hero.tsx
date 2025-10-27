import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

interface SquareData {
  id: number;
  src: string;
  link: string;
  alt: string;
}

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex: number;
  const newArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
};

// ✅ Static image data with alt text
const squareData: SquareData[] = [
  {
    id: 1,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/1",
    alt: "Smart Watch 1",
  },
  {
    id: 2,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/2",
    alt: "Smart Watch 2",
  },
  {
    id: 3,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/3",
    alt: "Smart Watch 3",
  },
  {
    id: 4,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/4",
    alt: "Headphones 1",
  },
  {
    id: 5,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/5",
    alt: "Headphones 2",
  },
  {
    id: 6,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/6",
    alt: "Headphones 3",
  },
];

const generateSquares = () =>
  shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
    >
      <Link
        to={sq.link}
        className="block w-full h-full bg-center bg-no-repeat bg-contain rounded-md"
        style={{ backgroundImage: `url(${sq.src})` }}
        aria-label={`View ${sq.alt}`}
      />
    </motion.div>
  ));

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState<React.ReactElement[]>(
    generateSquares()
  );

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-3 sm:grid-rows-2 md:grid-rows-2 gap-1 h-[350px] sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden">
      {squares}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center">
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100">
          ⚡ Smart Tech for a Smarter You!
        </h3>
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 my-4 md:my-6">
          Explore our latest gadgets, phones, and accessories — built for
          performance and innovation.
        </p>
        <Link
          to="/shop"
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all hover:bg-indigo-600 active:scale-95 flex w-[150px] gap-1.5 items-center justify-center"
          aria-label="Shop Now"
        >
          <ShoppingBag /> Shop Now
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default Hero;
