import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import Image from "next/image";

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Image src="/assets/images/logo.svg" alt="logo" />
      <MobileNavBar />
      <DesktopNavBar />
    </header>
  );
}

export default Header;
