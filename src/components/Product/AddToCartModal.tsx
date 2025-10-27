import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface AddToCartModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  price: number;
  quantity: number;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  open,
  onClose,
  name,
  price,
  quantity,
}) => {
  const total = price * quantity;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            ✅ Added to Cart
          </DialogTitle>
          <DialogDescription>
            Your product has been successfully added to your cart.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-2">
          <p>
            <span className="font-medium">Product:</span> {name}
          </p>
          <p>
            <span className="font-medium">Price:</span> ${price}
          </p>
          <p>
            <span className="font-medium">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-medium">Total:</span>{" "}
            <span className="font-bold">${total}</span>
          </p>
        </div>

        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
