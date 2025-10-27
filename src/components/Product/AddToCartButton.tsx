import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  onAdd: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAdd }) => {
  return (
    <Button onClick={onAdd} className="mt-4 flex items-center gap-2">
      <ShoppingCart className="w-4 h-4" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
