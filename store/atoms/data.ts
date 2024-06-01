import { atom } from "recoil";

interface DataItem {
    name: string;
    displayName: string;
  }
export const dataState = atom<DataItem[]>({
    key: "dataState",
    default: [],
    });