import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const handelSearch = () => {
    console.log(search);
    setSearch(!search);
  };
  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Input className="border border-gray-400 shadow hidden md:block" />
              {search ? (
                <Input className=" block md:hidden" />
              ) : (
                <Search className=" block md:hidden" onClick={handelSearch} />
              )}
            </div>
            <Button>Sign Up</Button>
            <ShoppingCart />
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
