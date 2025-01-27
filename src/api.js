import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Example feature slice
import leadsReducer from "./features/leadsSlice"; // Example feature slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    leads: leadsReducer,
  },
});

export default store;
