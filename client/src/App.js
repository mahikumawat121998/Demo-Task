import "./App.css";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./style.scss";
function App() {
  const currentUser = true;
  // Due to time shortage takinf currentUser true for every conditionas
  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
