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

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleNavActive = (navText: string): string => {
    return pathname === navText ? "bg-brand-600" : "";
  };

  return (
    <header className="header py-4 bg-brand-700">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <HeaderLogo />
          </Link>
          <div className="md:flex items-center justify-between hidden gap-x-1">
            {navItems.map((navItem) => (
              <Link
                className={`nav-link ${handleNavActive(navItem.link)}`}
                to={navItem.link}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
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
