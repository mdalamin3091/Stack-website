import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/icons/DashboardIcon";
import Sales from "../assets/icons/Sales";
import UserIcon from "../assets/icons/UserIcon";
import Logo from "../assets/icons/logo";
import { IdashboardSidebarItems } from "../types";
import MobileLogo from "../assets/icons/MobileLogo";

export const items: IdashboardSidebarItems[] = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <UserIcon />,
    title: "Users",
    link: "/users",
  },
  {
    icon: <Sales />,
    title: "Sales",
    link: "/sales",
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  return (
    <div className="col-span-2 md:col-span-1 border-r border-secondary-50 px-3 py-2">
      <span className="hidden md:block">
        <Link to="/users">
          <Logo />
        </Link>
      </span>
      <Link to="/users" className="block md:hidden">
        <MobileLogo />
      </Link>
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-secondary-100 mt-4 text-sm md:text-lg">
          Pages
        </h2>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`h-12 hover:bg-secondary text-secondary-100 px-4 rounded-xl flex items-center justify-center md:justify-start gap-2 ${
              location.pathname === item.link
                ? "bg-secondary"
                : "bg-transparent"
            }`}
          >
            <span>{item.icon}</span>
            <span className="hidden md:block">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
