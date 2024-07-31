import MenuItem from "./MenuItem";
import { CiGrid42 } from "react-icons/ci";
import { FaRegFileArchive } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLockOpen } from "react-icons/md";

const MenuList = () => {
  const item = [
    { path: "/", Icon: CiGrid42, name: "Dashboard" },
    { path: "/", Icon: MdOutlineLockOpen, name: "Passwords" },
    { path: "/", Icon: FaRegFileArchive, name: "Files" },
    { path: "/", Icon: MdOutlineSettings, name: "Settings" },
  ];

  return (
    <nav className="flex-1 space-y-2 overflow-auto py-4">
      {item.map((props) => (
        <MenuItem {...props} key={props.name} />
      ))}
    </nav>
  );
};

export default MenuList;
