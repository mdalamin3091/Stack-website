//   <h1>In the name of Allah</h1>
import { BrowserRouter, Routes, Route } from "react-router-dom";
import protectedRoutes from "./routes/protectedRoutes";
import ProtectedRouteGuard from "./routes/ProtectedRouteGuard";
import publicRoutes from "./routes/publicRoutes";
import PublicRouteGuard from "./routes/PublicRouteGuard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <ProtectedRouteGuard>
                  <route.element />
                </ProtectedRouteGuard>
              }
            ></Route>
          );
        })}
        {publicRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <PublicRouteGuard>
                  <route.element />
                </PublicRouteGuard>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
