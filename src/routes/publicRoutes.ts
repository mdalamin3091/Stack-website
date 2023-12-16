import SignIn from "../pages/SignIn";
import Signup from "../pages/SignUp";

const publicRoutes = [
  { path: "/signin", element: SignIn },
  { path: "/", element: Signup },
];

export default publicRoutes;
