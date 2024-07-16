import CustomSelector from "@/components/Selector";
import { options } from "@/config/options";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustrySelector = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    if (isSelected) {
      navigate("/Form/Jobinfoform");
    } else {
      console.log("need to select option");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[300px] mt-[70px] flex flex-col gap-[40px]">
        <div className=" w-full gap-[25px] flex flex-col items-center justify-between">
          <div className="w-[220px] h-10">
            <img
              src="/page-indicator/Page2.png"
              alt="progress"
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-[5rem] flex flex-col items-center justify-center">
            <div className="h-full w-[5rem]  ">
              <img src="/logo1.png" className="w-full h-full" />
            </div>
          </div>
          <div className="w-full h-[24px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-center h-full font-normal text-headercolor">
              Select an industry of your interest:
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <CustomSelector
            options={options}
            displayLogo={true}
            other="Please specify the industry of your interest!"
            setIsSelected={setIsSelected}
          />
        </div>

        <div className="w-full h-[80px] flex justify-center">
          <button
            onClick={handleClick}
            className="w-[100px] h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default IndustrySelector;
