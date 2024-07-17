import CustomSelector from "@/components/Selector";
import CustomSelectorTwo from "@/components/selectortwo";
import { business, options } from "@/config/options";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustrySelector = () => {
  const navigate = useNavigate();
  const [isNext, setIsNext] = useState(true)
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    if (isSelected) {
      navigate("/Form/Jobinfoform");
      
    } else {
      console.log("need to select option");
      setIsNext(false)
    }
  };
  console.log(isSelected)
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-[300px] mt-[70px] flex flex-col items-center gap-[40px]">
        <div className=" w-full gap-[25px] flex flex-col items-center justify-between">
          <div className="w-[220px] h-10">
            <img
              src="/page-indicator/Page2.png"
              alt="progress"
              className="w-full h-full"
            />
          </div>
          {/* <div className="w-full h-[5rem] flex flex-col items-center justify-center">
            <div className="h-full w-[5rem]  ">
              <img src="/logo1.png" className="w-full h-full" />
            </div>
          </div> */}
          <div className="w-full h-[24px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-center h-full font-normal text-headercolor">
              Select an industry of your interest:
            </h2>
          </div>
        </div>
        <div className="w-full  flex flex-row">
          <CustomSelectorTwo setIsSelected={setIsSelected}/>
        </div>

       { !isNext?<div className="w-full h-[15px] top-1 text-center">
          <p className="font-Lato text-[12px] font-medium text-red-600">
          * Please select (at least) one option to submit the survey!
          </p>
        </div>: null}

        <div className="w-full h-[40px] flex justify-center">
          <button
            onClick={handleClick}
            className="w-[100px] h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter"
          >
            Next
          </button>
        </div>
        <div className="w-[230px] h-[80px] gap[20px] flex flex-col justify-between items-center">
          <div className="w-[127px] h-[30px] flex flex-row gap-[10px]">
            <div className="w-[39px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/cafe.png"/>
            </div>
            <div className="w-[39px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/mula.png"/>
            </div>
            <div className="w-[39px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/travel.png"/>
            </div>
          </div>
          <div className="w-full h-[30px] flex flex-row justify-center gap-[20px]">
          <div className="w-[30px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/pet.png"/>
            </div>
            <div className="w-[30px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/rgbaxra.png"/>
            </div>
            <div className="w-[30px] h-[30px]">
              <img className="w-full h-full" src="/optionlogo/pannsine1.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndustrySelector;
