import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="px-10 dark:bg-background-dark dark:border-gray-700  bg-background_color py-1 flex items-center justify-between border-b-2">
        <img src="/public/logo.png" alt="" className="w-[65px]" />
        <div>
          {/* <ModeToggle /> */}
          <Button
            className="ml-5"
            variant="destructive"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
