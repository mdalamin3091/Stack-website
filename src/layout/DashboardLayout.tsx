import { FC, ReactNode } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface PropsType {
  children: ReactNode;
}
const DashboardLayout: FC<PropsType> = ({ children }) => {
  return (
    <section className="grid grid-cols-8 md:grid-cols-6 gap-3 min-h-screen">
      <DashboardSidebar />
      <div className="col-span-6 md:col-span-5 py-5 px-0 md:px-6">
        <DashboardNavbar />
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
