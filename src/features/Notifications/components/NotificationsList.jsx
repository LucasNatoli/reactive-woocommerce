import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function NotificationsList() {
  return (
    <List component="nav">
      <ListItemButton>
        <ListItemText primary="Orden 0001 - Completada" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Producto SKU-101 - Stock actualizado en tiendas" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Alerta de Stock minimo - SKU-101" />
      </ListItemButton>
    </List>
  );
}
