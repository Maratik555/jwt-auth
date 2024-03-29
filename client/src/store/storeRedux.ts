import {configureStore} from "@reduxjs/toolkit";
import profile from "./test/profileSlice";


export const storeRedux = configureStore({
    reducer: {profile}
});

export type RootState = ReturnType<typeof storeRedux.getState>
