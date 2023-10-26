import React, { useEffect } from "react";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Title } from "../../ui/Title";
import { Link, useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

import { useGetStoresQuery } from "../../api/apiSlice";
import { useSnackNotification } from "../../notifications/hooks/useSnackNotification";

function StorePaper({ store }) {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Typography variant="h5">
          <Link to={`/stores/${store.id}`}>{store.name}</Link>
        </Typography>
        <Typography variant="body2">{store.url}</Typography>
      </Paper>
    </Grid>
  );
}

export function StoresList() {
  const { displaySnackNotification } = useSnackNotification();
  const {
    data: stores,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetStoresQuery();
  const navigate = useNavigate()
  useEffect(() => {
    isError &&
      displaySnackNotification({ type: "error", message: error.error });
  }, [isError]);

  function handleAddStore(){
    navigate("/stores/new")
  }
  return (
    <section>
      <Title>Stores</Title>

      <Grid container spacing={3}>
        {isLoading && <h3>Cargando</h3>}
        {isSuccess &&
          stores.map((store) => <StorePaper store={store} key={store.id} />)}
        <Grid item container justifyContent={"flex-end"}>
          <Fab color="primary" onClick={handleAddStore}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </section>
  );
}
