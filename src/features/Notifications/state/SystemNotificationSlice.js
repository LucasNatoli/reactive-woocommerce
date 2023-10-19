import { createSlice, createAction } from "@reduxjs/toolkit";
const notificationInitialState = [
  {id:1, message: "System Notification Msg 🔔", createdAt: '2023/10/19', isNew: true},
  {id:2, message: "System Notification Msg 🔔", createdAt: '2023/10/18', isNew: true},
  {id:3, message: "Older system message 🔔", createdAt: '2023/10/17', isNew: true},
];

const SystemNotificationsSlice = createSlice({
  name: "systemNotifications",
  initialState: notificationInitialState,
  reducers: {
    addNotification: (state, action) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    markRead: (state, action) => ({ ...state, open: false }),
  },
});

export const SystemNotificationActions = {
  addNotification: createAction("systemNotifications/addNotification"),
  markRead: createAction("systemNotifications/markRead"),
};

export const SystemNotificationsReducer = SystemNotificationsSlice.reducer;