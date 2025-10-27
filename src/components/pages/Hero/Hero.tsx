import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

interface SquareData {
  id: number;
  src: string;
  link: string;
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

// ✅ Static image data
const squareData: SquareData[] = [
  {
    id: 1,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/1",
  },
  {
    id: 2,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/2",
  },
  {
    id: 3,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/3",
  },
  {
    id: 4,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/4",
  },
  {
    id: 5,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/5",
  },
  {
    id: 6,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/6",
  },
  {
    id: 7,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/7",
  },
  {
    id: 8,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/8",
  },
  {
    id: 9,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/9",
  },
  {
    id: 10,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/10",
  },
  {
    id: 11,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/11",
  },
  {
    id: 12,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/12",
  },
  {
    id: 13,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/13",
  },
  {
    id: 14,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/14",
  },
  {
    id: 15,
    src: "/product/WirelessHeadphones.webp",
    link: "/gallery/15",
  },
  {
    id: 16,
    src: "/product/SmartWatch.jpg",
    link: "/gallery/16",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
    >
      <Link
        to={sq.link}
        className="block w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Link>
    </motion.div>
  ));
};

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
    <div className="grid grid-cols-4 grid-rows-4 h-[350px] sm:h-[450px] md:h-[500px] gap-1 rounded-lg overflow-hidden">
      {squares}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
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
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all hover:bg-indigo-600 active:scale-95 flex w-[150px] gap-1.5"
        >
          <ShoppingBag /> Shop Now
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default Hero;
