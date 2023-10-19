import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Store from "./store.svg";

export default function NoStores() {
  return (
    <Paper
    sx={{
      padding: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "40em",
    }}
  >
    <Paper
      sx={{
        padding: 4,
        margin: 5
      }}
    >
      <img src={Store} alt="Empty Stores List" />
    </Paper>
    <Typography variant="h4">No hay ninguna Tienda integrada...</Typography>
    <Typography variant="h6">
      Configura al menos una tienda para empezar a trabajar
    </Typography>
  </Paper>
  )
}