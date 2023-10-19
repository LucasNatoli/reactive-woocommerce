import { useDispatch } from "react-redux";
import { SnackNotificationActions } from "../state/SnackNotificationSlice";

export const useSnackNotification = () => {
  const dispatch = useDispatch();

  const displaySnackNotification = (notification) => {
    dispatch(SnackNotificationActions.addNotification(notification));
  };

  const clearNotification = () => {
    dispatch(SnackNotificationActions.clearNotification());
  };

  return { displaySnackNotification, clearNotification };
};
