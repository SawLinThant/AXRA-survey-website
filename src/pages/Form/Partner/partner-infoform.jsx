import InputField from "@/components/CustomInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";

const PartnerInfoForm = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = handleSubmit((credentials) => {

  })
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
          <div className="w-full h-[90px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-center h-full font-normal text-headercolor ">
              Thank you for your interest in partnering with us! We offer the
              following services:
            </h2>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="w-full flex flex-col gap-[40px]">
            <InputField
              label="Name"
              id="name"
              name="name"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Enter your name"
            />
            <InputField
              label="Company Name"
              id="company-name"
              name="company-name"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Enter your Company Name"
            />
            <InputField
              label="Contact Information"
              id="phone"
              name="phone"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Enter your phone number"
            />
            <InputField
              label="Your Business Type"
              id="business"
              name="business"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Enter the type of your business"
            />
            <InputField
              label="Why partner with us?"
              id="reason"
              name="reason"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Please share your reason with us"
            />
            <InputField
              label="What can you offer to us?"
              id="offer"
              name="offer"
              //  value={signUpData.username}
              onChange={handleChange}
              register={register}
              placeholder="Please describe what you can offer us."
            />
          </div>
          <div className="w-full h-[80px] flex items-center justify-center">
            <button className="w-[100px] mt-4 h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter">
              Submit
            </button>
          </div>
          <div className="h-[20px]"></div>
        </form>
      </div>
    </div>
  );
};
export default PartnerInfoForm;
