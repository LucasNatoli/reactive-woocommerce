import { useEffect } from "react";

import NoStores from "../ui/NoStores";
import { Title } from "../ui/Title";

import { useSnackNotification } from "../notifications/hooks/useSnackNotification";
import { useGetStoresQuery } from "../api/apiSlice";
import { ProductsTable } from "./ProductsTable";

export default function ProductsPage() {
  const { displaySnackNotification } = useSnackNotification();

  const {
    data: stores,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetStoresQuery();

  useEffect(() => {
    isError &&
      displaySnackNotification({ type: "error", message: error.error });
  }, [isError]);

  return (
    <>
      <Title>Productos</Title>
      {isLoading && <h3>Cargando...</h3>}
      {isSuccess && stores.length === 0 && <NoStores />}
      {isSuccess && <ProductsTable store={stores[0]} />}
      {isSuccess && <p>{stores[0].name}</p>}
    </>
  );
}
