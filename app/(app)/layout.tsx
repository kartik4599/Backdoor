import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";

const layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 max-h-[calc(100vh-75px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
