import { RootStore } from "../store/store";

import { SnapshotIn, SnapshotOut } from "mobx-state-tree";

export type StoreInterface = typeof RootStore.Type;
export type StoreInterfaceSnapshotIn = SnapshotIn<typeof RootStore>;
export type StoreInterfaceSnapshotOut = SnapshotOut<typeof RootStore>;
