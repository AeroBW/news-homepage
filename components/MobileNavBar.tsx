import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavButton from "./NavButton";

const navTitles = ["Home", "New", "Popular", "Trending", "Categories"];

function MobileNavBar() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/images/icon-menu.svg"
            alt="hamburger"
            width={40}
            height={17}
          />
        </SheetTrigger>
        <SheetContent className="w-52 bg-off-white">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Navigation Menu</SheetDescription>
          </SheetHeader>
          <nav className="mt-32">
            <ul className="flex flex-col gap-4">
              {navTitles.map((title, i) => (
                <li key={i}>
                  <NavButton title={title} />
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavBar;
