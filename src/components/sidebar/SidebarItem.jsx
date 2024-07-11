import clsx from "clsx";
import { Link } from "react-router-dom";
import { SidebarContext } from "./Sidebar";
import { useContext } from "react";

const Sidebaritem = ({ icon, text, active, route }) => {
    const { expanded } = useContext(SidebarContext)
  return (
    <li>
      <Link
      to={`/${route}`}
        className={clsx(
          " relative flex items-center mt-[0.5rem] py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group",
          {
            "bg-gradient-to-tr from-indigo-200 to-indigo-100 ":active
          },
          {
            "hover:bg-indigo-50 text-gray-600": !active
          }
        )}
      >
        {icon}
        <span
        className={clsx("overflow-hidden transition-all",
            {
                "w-[8rem] ml-[1rem]":expanded
            },
            {
                "w-0":!expanded
            }
        )}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
export default Sidebaritem;
