import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Title from "../ui/Title";
import { useStores } from "./useStores";

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
        <Typography variant="h5">{store.name}</Typography>
        <Typography variant="body2">{store.url}</Typography>
      </Paper>
    </Grid>
  );
}
export default function Stores() {
  const { storesLoading, stores } = useStores();

  return (
    <>
      <Title>Configuración de Tiendas</Title>
      {storesLoading && <h3>Cargando...</h3>}
      {!storesLoading && (
        <Grid container spacing={3} key="0">
          {stores.map((store) => {
            return <StorePaper store={store} key={store.id} />;
          })}
        </Grid>
      )}
    </>
  );
}
