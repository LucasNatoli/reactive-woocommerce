import { useEffect } from "react";

import Paper from '@mui/material/Paper'
import NoStores from "../../ui/NoStores";
import { Title } from "../../ui/Title";

import { useSnackNotification } from "../../notifications/hooks/useSnackNotification";
import { useGetStoresQuery } from "../../api/apiSlice";
import { OrdersTable } from "./OrdersTable";

export function OrdersPage() {
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

  const paperStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    //borderRadius: '9px'
  };
  return (
    <Paper sx={paperStyle}>
      <Title>Pedidos</Title>
      {isLoading && <h3>Cargando...</h3>}
      {isSuccess && stores.length === 0 && <NoStores />}
      {isSuccess && stores.length>0 && <OrdersTable store={stores[0]} />}
    </Paper>
  );
}
