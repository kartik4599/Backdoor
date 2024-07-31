import Link from "next/link";
import { LuKey } from "react-icons/lu";
import Image from "next/image";
import MenuList from "./MenuList";

export const SideBarItems = () => {
  return (
    <>
      <div className="flex h-16 items-center justify-between px-2">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <LuKey className="h-8 w-8 text-primary" />
          <Image
            className="mx-auto"
            src={false ? "/images/logo2.png" : "/images/logo1.png"}
            width={120}
            height={120}
            alt="logo"
          />
        </Link>
      </div>
      <MenuList />
    </>
  );
};

const SideBar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 p-4 lg:flex">
      <SideBarItems />
    </aside>
  );
};

export default SideBar;
