import { useSelector } from "react-redux";
import { useSnackNotification } from "../hooks/useSnackNotification";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert'

export default function SnackNotification  ()  {
  const notification = useSelector((state) => state.notification);
  const { clearNotification } = useSnackNotification();

  const handleClose = (_, reason) =>
    reason !== "clickaway" && clearNotification();

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={notification.type}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};
