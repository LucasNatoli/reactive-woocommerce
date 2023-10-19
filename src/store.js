import { configureStore } from "@reduxjs/toolkit";
import { SnackNotificationReducer } from "./features/Notifications/state/SnackNotificationSlice";

export const store = configureStore({
  reducer: {
    notification: SnackNotificationReducer,
  },
});

export const RootState = store.getState();