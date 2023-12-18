import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";

const ComingSoon = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title =
    pathname === "/tasks"
      ? "Task"
      : pathname === "/reporting"
      ? "Reporting"
      : "Projects";
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[90vh] bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            <span className="text-blue-500">{title} Page Coming</span>{" "}
            <span className="text-yellow-500">Soon</span>
          </h1>
          <p className="text-gray-600 mb-8 animate-fade-in">
            We're working on something exciting. Stay tuned!
          </p>
          <Button
            classes="bg-primary text-white px-6 py-3 rounded-full"
            onClick={() => {
              navigate("/users");
            }}
            title="Back to Home"
          />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
