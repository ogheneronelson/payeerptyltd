import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cryptoApi } from "./service/cryptoApi";
import { exchangeApi } from "./service/exchangeRates";
import exchangeReducer from "./slice/exchangeSlice";

import userReducer from "./slice/userSlice";
import adminReducer from "./slice/adminSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storageSession from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
};

const rootReducer = combineReducers({
  admin: adminReducer,
  auth: userReducer,
  exchange: exchangeReducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [exchangeApi.reducerPath]: exchangeApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([cryptoApi.middleware]),
});

export let persistor = persistStore(store);