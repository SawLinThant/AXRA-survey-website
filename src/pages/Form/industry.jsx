import CustomSelector from "@/components/Selector";
import { options } from "@/config/options";

const IndustrySelector = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[300px] mt-[70px] flex flex-col gap-[40px]">
        <div className=" w-full h-[204px] flex flex-col items-center justify-between">
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
          <div className="w-full h-[24px] text-center">
            <h2 className="font-Lato text-[20px] h-full font-normal text-headercolor">
              Please select an option: I am ...
            </h2>
          </div>
        </div>
        <div className="w-full h-[880px] flex flex-col">
            <CustomSelector opions={options}/>
        </div>
        <div className="w-full h-[80px] flex justify-center">
                <button className="w-[100px] h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter">Next</button>
            </div>
      </div>
    </div>
  );
};
export default IndustrySelector;
