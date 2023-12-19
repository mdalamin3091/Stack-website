import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../assets/icons/HeaderLogo";
import SearchIcon from "../../assets/icons/SearchIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import Notification from "../../assets/icons/Notification";
import avatar from "../../assets/images/avatar.png";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import { useAppDispatch } from "../../redux/app/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import { navItems } from "../../constants";
import toast from "react-hot-toast";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("logout successful");
  };

  const handleNavActive = (navText: string): string => {
    return pathname === navText ? "bg-brand-600" : "";
  };

  return (
    <header className="header py-4 bg-brand-700">
      <nav className="container flex items-center justify-between">
        <div className="flex justify-between md:justify-start items-center w-full">
          <Link to="/">
            <HeaderLogo />
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center justify-between hidden gap-x-1">
            {navItems.map((navItem) => (
              <Link
                key={navItem.link}
                className={`nav-link ${handleNavActive(navItem.link)}`}
                to={navItem.link}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 right-0 bg-brand-700 p-4 md:p-0`}
        >
          {navItems.map((navItem) => (
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key={navItem.link}
              className={`block text-white py-2 px-4 ${handleNavActive(
                navItem.link
              )}`}
              to={navItem.link}
            >
              {navItem.title}
            </Link>
          ))}
          <div
            onClick={handleLogout}
            className="flex gap-1 py-2 px-4 text-white"
          >
            <LogoutIcon />
            Logout
          </div>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center gap-1">
          <div className="md:flex items-center justify-center gap-1 hidden">
            <SearchIcon />
            <SettingIcon />
            <Notification />
            <span onClick={handleLogout}>
              <LogoutIcon />
            </span>
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full cursor-pointer ml-2"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
