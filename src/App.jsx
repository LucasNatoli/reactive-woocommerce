import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./features/dashboard/Dashboard";
import AppLayout from "./features/layout/components/AppLayout";
import { AddStoreForm } from "./features/stores/components/AddStoreForm";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import {
  CustomersPage, 
  Login,
  ProductsPage,
  SnackNotification,
  StorePage,
  StoresList,
  OrdersPage
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
              <OrdersPage />
            </AppLayout>
          }
        />
        <Route
          path="/products"
          element={
            <AppLayout>
              <ProductsPage />
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
          path="/stores/new"
          element={
            <AppLayout>
              <AddStoreForm />
            </AppLayout>
          }
        />
        <Route
          path="/customers"
          element={
            <AppLayout>
              <CustomersPage />
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
