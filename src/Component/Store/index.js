import { configureStore } from "@reduxjs/toolkit";
import storeHistorySlice from "./storeslice";


console.log(storeHistorySlice);
const store = configureStore({
    reducer: storeHistorySlice
})

export default store
