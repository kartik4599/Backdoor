import MobileSidebar from "./MobileSidebar";
import HeaderBar from "./HeaderBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 shadow-sm sm:px-6">
      <MobileSidebar />
      <HeaderBar />
    </header>
  );
};

export default Header;
