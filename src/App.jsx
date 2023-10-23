import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./features/dashboard/Dashboard";
import AppLayout from "./features/layout/components/AppLayout";
import Orders from "./features/orders/Orders";
import Products from "./features/products/Products";
import { StoresList } from "./features/stores/components/StoresList";
import { StorePage } from "./features/stores/components/StorePage";
/* import Stores from "./features/Stores/Stores";
import StoreSetup from "./features/Stores/StoreSetup"; */
import {
  Customers, 
  Login,
  SnackNotification,
  StorePage,
  StoresList
} from "./features";


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
              <StoresList />
            </AppLayout>
          }
        />
        <Route
          path="/stores/:storeId"
          element={
            <AppLayout>
              <StorePage />
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
