import clsx from "clsx";
import { useState } from "react";

const CustomSelector = ({ opions }) => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-start gap-[20px]">
      {opions.map((option, index) => (
        <div
          key={index}
          className={clsx(
            "w-full h-[70px] gap-[20px] py-[10px] px-[20px] flex flex-row items-center border-[0.3px] rounded-[10px]",
            {
              "border-gray-500": activeIndex == index,
            }
          )}
          onClick={() => setActiveIndex(index)}
        >
          <div className="w-[50px] h-[50px]">
            <img
              className="w-full h-full"
              src={option.image}
              alt={option.image}
            />
          </div>
          <p className="text-[16px] font-normal text-headercolor font-Lato">
            {option.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomSelector;
