import { configureStore } from "@reduxjs/toolkit";
import { SnackNotificationReducer } from "./features/notifications/state/SnackNotificationsSlice";
import { SystemNotificationsReducer } from "./features/notifications/state/SystemNotificationSlice";
import { StoresReducer } from './features/stores/state/storesSlice';

export const store = configureStore({
  reducer: {
    notification: SnackNotificationReducer,
    systemNotifications: SystemNotificationsReducer,
    stores: StoresReducer
  },
});

export const RootState = store.getState();