import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import PermitList from "./Pages/PermitList/PermitList";
import PersonelList from "./Pages/PersonelList/PersonelList";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./hooks/authContext.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Admin",
          element: <Admin />,
        },
        {
          path: "/PermitList",
          element: <PermitList />,
        },
        {
          path: "/PersonelList",
          element: <PersonelList />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
