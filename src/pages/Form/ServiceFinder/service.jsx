import CustomSelector from "@/components/Selector";
import { services } from "@/config/service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const Service = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [isNext, setIsNext] = useState(true)
  const handleClick = () => {
    if (isSelected) {
      navigate("/Form/Servicesinfoform");
    } else {
      console.log("need to select option");
      setIsNext(false)
    }
  };
  console.log(isSelected)
  return (
    <div className="w-full h-full flex flex-col items-center bg-white">
      <div className="w-[300px] mt-[30px] flex flex-col gap-[40px]">
        <div className=" w-full gap-[25px] flex flex-col items-center justify-between">
          <div className="w-[220px] h-10">
            <img
              src="/page-indicator/Page2.png"
              alt="progress"
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-[60px] leading-8">
            <h2 className=" flex flex-col text-clip h-full  ">
              <p className="text-center font-Lato text-[20px] font-normal text-headercolor">Thank you for considering us!</p> 
              <p className="text-center font-Lato text-[20px] font-normal text-headercolor">Here are the services we offer:</p>
            </h2>
          </div>
        </div>
        <div className="w-full h-[368px] flex flex-col">
          <CustomSelector
            options={services}
            displayLogo={true}
            other="Please specify the service you expect from us"
            setIsSelected={setIsSelected}
          />
        </div>

        { !isNext?<div className="w-full h-[15px] top-1 mt-3 text-center">
          <p className="font-Lato text-[12px] font-medium text-red-600">
          * Please select (at least) one option to submit the survey!
          </p>
        </div>: null}

        <div 
       // className="w-full h-[80px] flex flex-row items-center justify-center"
       className={clsx("w-full  flex flex-row items-center justify-center",
        {
          "h-[80px]": isNext,
          "h-[20px]": !isNext
        }
      )}
        >
          <button
            onClick={handleClick}
            className="w-[100px] text-white mb-2 h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Service;
