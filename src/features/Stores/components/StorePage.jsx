import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Title } from "../../ui/Title";

import { useParams } from "react-router-dom";
import { useGetStoreQuery } from "../../api/apiSlice";
import { useSnackNotification } from "../../notifications/hooks/useSnackNotification";
import { Typography } from "@mui/material";
import Switch from "../../ui/Switch";

const paperStyle = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  //borderRadius: '9px'
};

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
        <Paper sx={paperStyle}>
          <Title>{store.name}</Title>
          <Typography variant="body">Url: {store.url}</Typography>
          <Typography variant="body">Activa: <Switch on= {store.state ? true: false} /></Typography>
          
        </Paper>
      )}
    </>
  );
}
