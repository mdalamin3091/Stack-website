import NotAvailablePage from "../components/ui/NotAvailablePage";
import DashboardLayout from "../layout/DashboardLayout";

const Sales = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-0 md:p-4">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-300 py-4">
          Sales
        </h2>
        <NotAvailablePage title="Sales" />
      </div>
    </DashboardLayout>
  );
};

export default Sales;
