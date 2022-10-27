import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      {/* This is the Logo */}
      <div>
        <Image />
      </div>

      {/* This is the searchbar */}
      <div>Search Bar</div>

      {/* This is the menu */}
      <div>Menu</div>
    </header>
  );
};

export default Header;
