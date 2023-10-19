import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./features/Dashboard/Dashboard";
import AppLayout from "./features/Layout/components/AppLayout";
import Orders from "./features/Orders/Orders";
import Products from "./features/Products/Products";
import Stores from "./features/Stores/Stores";
import StoreSetup from "./features/Stores/StoreSetup";
import Login from "./features/Auth/Login";
import Customers from "./features/Customers/Customers";
import SnackNotification from "./features/Notifications/components/SnackNotification";

function Root() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <AppLayout>
              <Orders />
            </AppLayout>
          }
        />
        <Route
          path="/products"
          element={
            <AppLayout>
              <Products />
            </AppLayout>
          }
        />
        <Route
          path="/stores"
          element={
            <AppLayout>
              <Stores />
            </AppLayout>
          }
        />
        <Route
          path="/store-setup"
          element={
            <AppLayout>
              <StoreSetup />
            </AppLayout>
          }
        />
        <Route
          path="/customers"
          element={
            <AppLayout>
              <Customers />
            </AppLayout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <SnackNotification />
    </Provider>
  );
}
const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
