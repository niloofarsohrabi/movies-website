import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducer'
export const store = createStore(rootReducer);