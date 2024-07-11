import clsx from "clsx";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext } from "react";
import { useState } from "react";

export const SidebarContext = createContext();

const Sidebar = ({children}) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <SidebarContext.Provider value={{expanded}}>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
           <h2 className={clsx("",
            {
                "w-32":expanded
            },
            {
                "w-0":!setExpanded
            }
           )}></h2>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <div className="h-[6rem] flex flex-row items-center justify-center">
          <img
              src="/logo.jpg"
              className={clsx("h-full overflow-hidden transition-all",
                {
                    "w-[6rem] mt[2rem] mr-[1.5rem]":expanded
                },
                {
                    "w-[2rem] h-[2rem]": !expanded
                }
              )}
              // className={`overflow-hidden transition-all ${
              //   expanded ? "w-32" : "w-0"
              // }`}

              alt="AXRA-logo"
            />
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 mt-[2rem]">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};
export default Sidebar;
