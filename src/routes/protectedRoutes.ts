import ComingSoon from "../pages/ComingSoon";
import UserList from "../pages/Users";

// Admin Pages
const protectedRoutes = [
  { path: "/users", element: UserList },
  { path: "/projects", element: ComingSoon },
  { path: "/tasks", element: ComingSoon },
  { path: "/reporting", element: ComingSoon },
];

export default protectedRoutes;
