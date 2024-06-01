import { UniqueIdentifier } from "@dnd-kit/core";
import { atom } from "recoil";


export const activeState = atom<UniqueIdentifier | null>({
    key: "activeState",
    default: null,
    });