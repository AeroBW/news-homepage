import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <img src="/assets/images/logo.svg" alt="logo" />
      <MobileNavBar />
      <DesktopNavBar />
    </header>
  );
}

export default Header;
