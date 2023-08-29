import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import { persistReducer } from "redux-persist";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}

const persistConfig = {
  key: "root",
  version: 1,
  storage: createPersistStorage(),
};

const reducer = combineReducers({
  basketReducer: basketReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
