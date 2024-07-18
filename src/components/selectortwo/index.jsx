import clsx from "clsx";
import { useState } from "react";
import { Input } from "../ui/input";
import { useOption } from "@/lib/context/option-context";
import { business, options } from "@/config/options";

const CustomSelectorTwo = ({ displayLogo = false, other, setIsSelected }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [isOtherOption, setIsOtherOption] = useState(false);
  const [otherValue, setOtherValue] = useState("");
  const { SelectIndustryAndService, AddOtherOption, SelectIndustry } = useOption();

  console.log(activeIndices);


const handleOption = (option, index) => {
    let updatedIndices = [];
    console.log(updatedIndices.length)
    if (option.name === "Others") {
      setIsOtherOption(!isOtherOption);
      if (activeIndices.includes(index)) {
        updatedIndices = activeIndices.filter((i) => i !== index);
      } else {
        updatedIndices = [...activeIndices, index];
      }
    } else {
      SelectIndustry(option.name);
      if (activeIndices.includes(index)) {
        updatedIndices = activeIndices.filter((i) => i !== index);
      } else {
        updatedIndices = [...activeIndices, index];
      }
    }
    setActiveIndices(updatedIndices);
    setIsSelected(updatedIndices.length > 0);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (otherValue.length > 0) {
      setIsSelected(true);
    }
    else{
        setIsSelected(false)
    }

    setOtherValue(value);
    AddOtherOption(value);
  };

  return (
    <div className="w-full flex flex-col justify-start gap-[20px]">
      <div className="w-full h-[260px] flex flex-row justify-start gap-[10px]">
        <div className="h-full w-full grid grid-cols-2 gap-[10px]">
          {options.map((option, index) => (
            <div
              key={index}
              className={clsx(
                "w-full h-[44px] flex justify-center items-center rounded-[11px]",
                {
                  "bg-gradient-to-r from-company_purple to-company_pink border-2 border-pink-700":
                    activeIndices.includes(index),
                }
              )}
            >
              <div
                className={clsx(
                  "w-full h-full gap-[20px] py-[10px] px-[10px] flex flex-row justify-center items-center border-[0.3px] rounded-[10px] z-10",
                  {
                    "h-[calc(100%-4px)] w-[calc(100%-4px)] bg-white":
                      activeIndices.includes(index),
                    "border-[0.3px]": !activeIndices.includes(index),
                  }
                )}
                onClick={() => handleOption(option, index)}
              >
                {displayLogo && (
                  <div className="w-[25px] h-[20px]">
                    <img
                      className="w-full h-full"
                      src={option.image}
                      alt={option.image}
                    />
                  </div>
                )}
                <p className="text-[12px] text-center font-normal text-headercolor font-Lato">
                  {option.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={clsx("w-full transition-all duration-500 ease-in-out", {
          "opacity-100 h-[40px]": isOtherOption,
          "opacity-0 h-0": !isOtherOption,
        })}
      >
        <Input
          type="text"
          placeholder="Please specify the industry of your interest!"
          value={otherValue}
          onChange={handleInputChange}
          className="w-full h-full font-Inter text-[12px] rounded-[10px] py-[10px] px-[20px]"
        />
      </div>
    </div>
  );
};

export default CustomSelectorTwo;
