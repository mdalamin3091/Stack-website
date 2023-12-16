import NotAvailablePage from "../components/ui/NotAvailablePage";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-0 md:p-4">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-300 py-4">
          Dashboard
        </h2>
        <NotAvailablePage title="Dashboard" />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
