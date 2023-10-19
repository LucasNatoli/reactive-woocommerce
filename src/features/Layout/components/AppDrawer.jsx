import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useNavigate } from "react-router-dom";
import { useDrawerMenues } from "../hooks/useDrawerMenues";
import SwitchMode from "./SwitchMode";
import { Drawer } from "./Drawer";

export default function AppDrawer({ open, toggleDrawer }) {
  const { navRoutes, reportRoutes } = useDrawerMenues();
  const navigate = useNavigate();

  function newListItem(item) {
    return (
      <ListItem key={item.key} disablePadding>
        <ListItemButton onClick={() => navigate(item.route)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {navRoutes.map((route) => newListItem(route))}
        <Divider sx={{ my: 1 }} />
        <ListSubheader component="div" inset>
          Reportes guardados
        </ListSubheader>
        {reportRoutes.map((route) => newListItem(route))}
        <Divider sx={{ my: 1 }} />
        <ListItem key="dark-mode" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
            <ListItemText primary="Darkmode" />
            <SwitchMode />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
