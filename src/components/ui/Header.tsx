import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/icons/HeaderLogo";
import SearchIcon from "../../assets/icons/SearchIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import Notification from "../../assets/icons/Notification";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  return (
    <header className="header py-4 bg-brand-700">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <HeaderLogo />
          </Link>
          <div className="flex items-center justify-between">
            <Link className="nav-link" to="/users">
              Home
            </Link>
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
            <Link className="nav-link" to="/reporting">
              Reporting
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <SearchIcon />
          <SettingIcon />
          <Notification />
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
