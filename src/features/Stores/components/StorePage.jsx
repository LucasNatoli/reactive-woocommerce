import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Title } from "../../ui/Title";

import { useParams } from "react-router-dom";
import { useGetStoreQuery } from "../../api/apiSlice";
import { useSnackNotification } from "../../notifications/hooks/useSnackNotification";

export function StorePage() {
  const { storeId } = useParams();
  const {
    data: store,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetStoreQuery(storeId);
  const { displaySnackNotification } = useSnackNotification();

  useEffect(() => {
    isError &&
      displaySnackNotification({ type: "error", message: error.error });
  }, [isError]);

  return (
    <>
      {isFetching && <h3>Cargando</h3>}
      {isSuccess && (
        <Paper>
          <Title>{store.name}</Title>
          <h2>{store.url}</h2>
        </Paper>
      )}
    </>
  );
}
