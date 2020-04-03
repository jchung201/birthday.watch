import { RootStore } from "../store/store";

import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

// export interface Store extends Instance<typeof Store> {}
// export interface StoreSnapshotIn extends SnapshotIn<typeof Store> {}
// export interface StoreSnapshotOut extends SnapshotOut<typeof Store> {}

export type StoreInterface = typeof RootStore.Type;
// export interface StoreInterface extends StoreType {}
export type StoreInterfaceSnapshotIn = SnapshotIn<typeof RootStore>;
export type StoreInterfaceSnapshotOut = SnapshotOut<typeof RootStore>;

// export type StoreInterface = Instance<typeof Store>;
// export type StoreInterfaceSnapshotIn = SnapshotIn<typeof Store>;
// export type StoreInterfaceSnapshotOut = SnapshotOut<typeof Store>;
