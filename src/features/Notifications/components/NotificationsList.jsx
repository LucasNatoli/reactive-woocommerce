import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useSystemNotifications } from "../hooks/useSystemNotifications";
import { useSelector } from "react-redux";

export default function NotificationsList() {
  const systemNotifications = useSelector((state) => state.systemNotifications);
  const { markRead } = useSystemNotifications();
  

  return (
    <List component="nav">
      {systemNotifications.map((notif) => (
        <ListItemButton key={notif.id}>
          <ListItemText primary={notif.message} />
        </ListItemButton>
      ))}
    </List>
  );
}
