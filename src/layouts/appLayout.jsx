import Header from "@/components/Header";
import GridPattern from "@/components/ui/grid-pattern";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <div className="background">
        <GridPattern />
        <main className="container mx-auto min-h-screen">
          <Header />
          <Outlet />
        </main>
        <div className="footer h-[50px] bg-[#0A0A0A] text-center flex text-white items-center justify-center">
          <p>Made with ❤️ by Abinash </p>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
