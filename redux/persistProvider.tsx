"use client";

import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export function PersistProvider({ children }: { children: React.ReactNode }) {
let persistor = persistStore(store);

  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}