import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsList from "./NotificationsList";
import { useSelector } from "react-redux";

export default function NotificationsPopup() {
  const [anchorEl, setAnchorEl] = useState(null);
  const systemNotifications = useSelector((state) => state.systemNotifications);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
        <Badge badgeContent={systemNotifications.length} color="warning">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <NotificationsList />
      </Popover>
    </>
  );
}
