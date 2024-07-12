import InputField from "@/components/CustomInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ServiceInfoForm= () => {
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
          <div className="w-full h-[60px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-clip h-full font-normal text-headercolor">
              Thank you for considering us!Here are the services we offer:
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
            label="Company Name"
            id="company-name"
            name="company-name"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter your Company Name"
          />
          <InputField
            label="Contact Information"
            id="phone"
            name="phone"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <InputField
            label="Your Business Type"
            id="business"
            name="business"
            //  value={signUpData.username}
            onChange={handleChange}
            placeholder="Enter the type of your business"
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
export default ServiceInfoForm;
