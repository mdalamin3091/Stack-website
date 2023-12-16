import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";
import UserList from "../pages/Users";

// Admin Pages
const protectedRoutes = [
  { path: "/users", element: UserList },
  { path: "/dashboard", element: Dashboard },
  { path: "/sales", element: Sales },
];

export default protectedRoutes;
