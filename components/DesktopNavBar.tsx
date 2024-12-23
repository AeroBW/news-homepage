import NavButton from "./NavButton";

const navTitles = ["Home", "New", "Popular", "Trending", "Categories"];

function DesktopNavBar() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-4">
        {navTitles.map((title, i) => (
          <li key={i}>
            <NavButton
              title={title}
              className="tra bg-transparent text-dark-grayish-blue transition duration-150 ease-in-out hover:bg-transparent hover:text-soft-red"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavBar;
