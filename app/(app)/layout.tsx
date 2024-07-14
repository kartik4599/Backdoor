import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";

const layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
