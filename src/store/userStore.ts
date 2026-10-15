import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
    username: string;
    setUsername: (username: string) => void;
    clearUser: () => void;
}

export const userStore = create<UserState>()(
    persist(
        (set) => ({
            username: "",

            setUsername: (username) => set({ username }),
            clearUser: () => set({ username: '' }),
        }),
        {
            name: "user-storage",
        }
    )
);