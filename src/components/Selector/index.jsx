import clsx from "clsx";
import { useState } from "react";
import { Input } from "../ui/input";

const CustomSelector = ({ options, displayLogo = true, other }) => {
  const [activeIndex, setActiveIndex] = useState();
  const [isOtherOption, setIsOtherOption] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-start gap-[20px]">
      {options.map((option, index) => (
        <div
          key={index}
          className={clsx(
            "w-full h-[70px] flex justify-center items-center rounded-[11px]",
            {
              "bg-gradient-to-r from-company_purple to-company_pink":
                activeIndex === index,
            }
          )}
        >
          <div
            className={clsx(
              "w-full h-full gap-[20px] py-[10px] px-[20px] flex flex-row items-center border-[0.3px] rounded-[10px] z-10",
              {
                "h-[calc(100%-2px)] w-[calc(100%-2px)] bg-white":
                  activeIndex === index,
                "border-transparent": activeIndex !== index,
              }
            )}
            onClick={() => {
              setActiveIndex(index);
              if (option.name === "Other") {
                setIsOtherOption(true);
              } else {
                setIsOtherOption(false);
              }
            }}
          >
            {displayLogo && (
              <div className="w-[50px] h-[50px]">
                <img
                  className="w-full h-full"
                  src={option.image}
                  alt={option.image}
                />
              </div>
            )}
            <p className="text-[16px] font-normal text-headercolor font-Lato">
              {option.name}
            </p>
          </div>
        </div>
      ))}
      <div
        className={clsx("w-full transition-all duration-500 ease-in-out", {
          "opacity-100 h-[40px]": isOtherOption,
          "opacity-0 h-0": !isOtherOption,
        })}
      >
        <Input
          type="text"
          placeholder={other}
          className="w-full h-full rounded-[10px] py-[10px] px-[20px]"
        />
      </div>
    </div>
  );
};

export default CustomSelector;
