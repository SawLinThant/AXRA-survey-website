import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SelectOption = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[300px] mt-[70px] px[40px] flex flex-col gap-[40px]">
        <div className="w-full h-[204px] flex flex-col items-center justify-between">
          <div className="w-[220px] h-10">
            <img
              src="/page-indicator/Page1.png"
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
            <h2 className="font-Lato text-[20px] font-normal text-headercolor">
              Please select an option: I am ...
            </h2>
          </div>
        </div>
        <div className="w-full h-[196px]">
          <div className="h-full w-full">
            <RadioGroup className="h-full w-full flex flex-col gap-4 " defaultValue="job-seeker">
              <div className="w-full h-1/3 flex flex-row items-center gap-[20px] px-[30px] py-[16px] rounded-[10px] shadow-radio_box">
                <RadioGroupItem className="checked:bg-headercolor" value="job-seeker" id="job-seeker" />
                <p className="text-[16px] font-Lato text-headercolor font-normal">A Job Seeker</p>
              </div>
              <div className="w-full h-1/3 border flex flex-row items-center gap-[20px] px-[30px] py-[16px] rounded-[10px] shadow-radio_box">
                <RadioGroupItem className="checked:bg-headercolor" value="customer" id="customer" />
                <p className="text-[16px] font-Lato text-headercolor font-normal">A Customer</p>
              </div>
              <div className="w-full h-1/3 border flex flex-row items-center gap-[20px] px-[30px] py-[16px] rounded-[10px] shadow-radio_box">
                <RadioGroupItem className="checked:bg-headercolor" value="business-partner" id="business-partner" />
                <p className="text-[16px] font-Lato text-headercolor font-normal">A Business Partner</p>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectOption;
