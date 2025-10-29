import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseCart } from "../context/CartContext";
const MiniCartSidebar = () => {
  const {
    items,
    addToCart,
    removeFromCart,
    totalPrice,
    isSidebarOpen,
    closeSidebar,
  } = UseCart();

  const increaseQty = (item: (typeof items)[0]) =>
    addToCart({ ...item, quantity: 1 });
  const decreaseQty = (item: (typeof items)[0]) => {
    if (item.quantity > 1) {
      removeFromCart(item.id);
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else removeFromCart(item.id);
  };

  return (
    <Sheet open={isSidebarOpen} onOpenChange={closeSidebar}>
      <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your products before checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh]">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => decreaseQty(item)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => increaseQty(item)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="mt-4 flex flex-col gap-2">
            <p className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <Button className="w-full">Proceed to Checkout</Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MiniCartSidebar;
