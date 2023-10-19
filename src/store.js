import { configureStore } from "@reduxjs/toolkit";
import { SnackNotificationReducer } from "./features/Notifications/state/SnackNotificationsSlice";
import { SystemNotificationsReducer } from "./features/Notifications/state/SystemNotificationSlice";

export const store = configureStore({
  reducer: {
    notification: SnackNotificationReducer,
    systemNotifications: SystemNotificationsReducer,
  },
});

export const RootState = store.getState();