import { useDispatch } from "react-redux";
import { SystemNotificationActions } from "../state/SystemNotificationSlice";

export const useSystemNotifications = () => {
  const dispatch = useDispatch();

  const addNotification = (notification) => {
    dispatch(SystemNotificationActions.addNotification(notification));
  };

  const markRead = () => {
    dispatch(SystemNotificationActions.markRead(notification));
  };

  return { addNotification, markRead };
};
