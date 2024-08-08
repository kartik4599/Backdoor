import { getOwnData } from "@/lib/services";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface UserStore {
  userData?: { id: number; name: string; email: string };
  isLoggedIn: boolean;
  setUser: (token?: string) => Promise<void>;
  removeUser: () => void;
}

const userStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        setUser: async (token?: string) => {
          if (token) {
            localStorage.setItem("token", token);
          } else {
            token = localStorage.getItem("token") || "";
          }
          const response = await getOwnData();
          set({
            userData: response.data,
            isLoggedIn: true,
          });
        },
        removeUser: () => {
          set({
            userData: undefined,
            isLoggedIn: false,
          });
        },
      }),
      { name: "userStore" }
    )
  )
);

export default userStore;
