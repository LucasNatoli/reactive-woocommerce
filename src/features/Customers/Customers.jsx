import { useEffect } from "react";

import NoStores from "../ui/NoStores";
import { Title } from "../ui/Title";

import { useGetStoresQuery } from "../api/apiSlice";
import { useSnackNotification } from "../notifications/hooks/useSnackNotification";

export function Customers() {
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
      <Title>Clientes</Title>
      {isLoading && <h3>Cargando</h3>}
      {isSuccess && stores.length === 0 && <NoStores />}
    </>
  );
}
