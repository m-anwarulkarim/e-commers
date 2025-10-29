import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { foods, travelMenuItems } from "./config";
import { Logo } from "./logo";
import { Link } from "react-router";
import { ModeToggle } from "../ui/theme/mode-toggle";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />

        <div className="mt-12 text-base space-y-4">
          <Link to="/" className="inline-block">
            Home
          </Link>

          <div>
            <div className="font-bold">Food</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {foods.map((foodItem) => (
                <li key={foodItem.title}>
                  <Link to="/" className="flex items-center gap-2">
                    <foodItem.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {foodItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Tech</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {travelMenuItems.map((item) => (
                <li key={item.title}>
                  <Link to="/" className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};
