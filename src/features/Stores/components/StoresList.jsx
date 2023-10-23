import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Title from "../../ui/Title";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllStores } from "../state/storesSlice";

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
  const stores = useSelector(selectAllStores);

  return (
    <section>
      <Title>Stores</Title>

      <Grid container spacing={3}>
        {stores.map((store) => (
          <StorePaper store={store} key={store.id} />
        ))}
      </Grid>
    </section>
  );
}
