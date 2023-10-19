import { createSlice, createAction } from "@reduxjs/toolkit";
const notificationInitialState = {
  open: false,
  type: "info",
  message: "",
  timeout: 4000,
};

const SnackNotificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    addNotification: (state, action) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: (state) => ({ ...state, open: false }),
  },
});

export const SnackNotificationActions = {
  addNotification: createAction("notification/addNotification"),
  clearNotification: createAction("notification/clearNotification"),
};

export const SnackNotificationReducer = SnackNotificationSlice.reducer;