import { getOwnData } from "@/lib/services";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import Biscuit from "js-cookie";

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
          Biscuit.set("token", token);
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
