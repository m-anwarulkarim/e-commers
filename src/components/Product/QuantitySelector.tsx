import React from "react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <Button variant="outline" onClick={decrease}>
        -
      </Button>
      <span className="text-lg font-semibold w-6 text-center">{quantity}</span>
      <Button variant="outline" onClick={increase}>
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
