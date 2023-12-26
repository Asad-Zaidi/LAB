import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/UserData/userSlice";

export const store = configureStore({
    reducer: {
        userData: userSlice,
    },
});
