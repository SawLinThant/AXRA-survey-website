import { UserCircle } from "lucide-react";
import Sidebar from "./Sidebar";
import Sidebaritem from "./SidebarItem";

const CustomSidebar = () => {
    return(
        <div>
            <Sidebar>
                <Sidebaritem icon={<UserCircle  size={20}/>} text="Survey Lists" route="Dashboard" />
                {/* <Sidebaritem icon={<UserCircle  size={20}/>} text="Survey Lists" route="Dashboard/Users" /> */}
            </Sidebar>

        </div>
    )
}
export default CustomSidebar;