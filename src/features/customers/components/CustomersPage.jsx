import { useEffect } from "react";

import Paper from "@mui/material/Paper";
import NoStores from "../../ui/NoStores";
import { Title } from "../../ui/Title";

import { useSnackNotification } from "../../notifications/hooks/useSnackNotification";
import { useGetStoresQuery } from "../../api/apiSlice";
import { CustomersTable } from "./CustomersTable";

export function CustomersPage() {
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
      <Title>Clientes</Title>
      {isLoading && <h3>Cargando...</h3>}
      {isSuccess && stores.length === 0 && <NoStores />}
      {isSuccess &&
        stores.length > 0 &&
        stores.map((store) => (
          <Paper key={store.id} sx={{...paperStyle, marginBottom: 3, paddingBottom: 5}} >
            <Title>{store.name}</Title>
            <CustomersTable store={store} />
          </Paper>
        ))}
    </Paper>
  );
}
