import InputField from "@/components/CustomInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const JobInfoForm = () => {
  const handleChange = () => {};
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[300px] mt-[70px] flex flex-col gap-[40px]">
      <div className=" w-full gap-[25px] flex flex-col items-center justify-between">
          <div className="w-[220px] h-10">
            <img
              src="/page-indicator/Page3.png"
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
        <div className="w-full flex flex-col gap-[40px]">
          <InputField
            label="Name"
            id="name"
            name="name"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <InputField
            label="Contact Information"
            id="phone"
            name="phone"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
          />
          <InputField
            label="Education"
            id="education"
            name="education"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter your highest education degree"
          />
          <div className="w-full h-[51px] flex flex-col gap-[16px]">
            <p className="text-[12px] font-semibold font-Inter">
              Currently Employed
            </p>
            <RadioGroup className="flex flex-row w-[108px] h-[20px] gap-[16px]">
              <div className="flex flex-row gap-[5px]">
                <RadioGroupItem value="Yes" id="No" />
                <p className="text-[12px] font-semibold font-Inter">Yes</p>
              </div>
              <div className="flex flex-row gap-[5px]">
                <RadioGroupItem value="No" id="No" />
                <p className="text-[12px] font-semibold font-Inter">No</p>
              </div>
            </RadioGroup>
          </div>
          <InputField
            label="Current Industry Nature"
            id="industry"
            name="username"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="E.g. Web Development, Sales & Marketing"
          />
          <InputField
            label="Skill"
            id="skill"
            name="skill"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="E.g. Java, Python"
          />
        </div>
        <div className="w-full h-[80px] flex justify-center">
          <button className="w-[100px] h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default JobInfoForm;
