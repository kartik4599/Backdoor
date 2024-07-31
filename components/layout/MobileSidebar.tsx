import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import { Button } from "../ui/button";
import { SideBarItems } from "./SideBar";

const MobileSidebar = () => {
  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <FiMenu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SideBarItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
