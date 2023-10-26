import { configureStore } from "@reduxjs/toolkit";
import { SnackNotificationReducer } from "./features/notifications/state/SnackNotificationsSlice";
import { SystemNotificationsReducer } from "./features/notifications/state/SystemNotificationSlice";
import { StoresReducer } from './features/stores/state/storesSlice';
import { apiSlice } from "./features/api/apiSlice";
import { wooSlice } from "./features/api/wooSlice";

export const store = configureStore({
  reducer: {
    notification: SnackNotificationReducer,
    systemNotifications: SystemNotificationsReducer,
    stores: StoresReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [wooSlice.reducerPath]: wooSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(wooSlice.middleware)
});

export const RootState = store.getState();