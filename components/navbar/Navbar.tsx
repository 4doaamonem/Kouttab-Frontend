import ActionButtons from "./ActionButtons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="sticky w-full z-50 top-0   bg-secondary-light-hover ">
      <div className="max-w-7xl mx-auto  py-4 px-4  ">
        <div className="flex items-center justify-between lg:justify-evenly  ">
          <Logo />
          <NavLinks />
          <ActionButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
