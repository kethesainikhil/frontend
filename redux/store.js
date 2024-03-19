import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./actions/demoSlice";
import { userDataReducer } from "./actions/userDataSlice";

export const store = configureStore({
  reducer: { demo: demoReducer,
    userData:userDataReducer
   },

});
