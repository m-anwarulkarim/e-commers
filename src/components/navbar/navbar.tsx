import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import MiniCartSidebar from "@/components/Product/MiniCartSidebar";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const { openSidebar, items } = useCart();

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Input className="border border-gray-400 shadow hidden md:block" />
              {!search && (
                <Search
                  className="block md:hidden"
                  onClick={() => setSearch(true)}
                />
              )}
              {search && <Input className="block md:hidden" />}
            </div>

            <Button>Sign Up</Button>

            <div
              onClick={openSidebar}
              className="flex items-center gap-1 cursor-pointer"
            >
              <ShoppingCart />
              <span>Cart ({items.length})</span>
            </div>

            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>

      <MiniCartSidebar />
    </div>
  );
};

export default Navbar;
