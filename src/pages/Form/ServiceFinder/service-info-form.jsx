import InputField from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import { useOption } from "@/lib/context/option-context";
import { useMutation } from "@apollo/client";
import { CREATE_SERVICE } from "@/graphql/mutations/formMutation";
import { useNavigate } from "react-router-dom";

const ServiceInfoForm = () => {
  const {register,handleSubmit} = useForm();
  const {option,industryAndService} = useOption();
  const [CreateService] = useMutation(CREATE_SERVICE);
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(credentials) => {
    try{
      await CreateService({
       variables:{
         name: credentials.name,
         content_infromation: credentials.phone,
         user_type: option, 
         service_type: industryAndService,
         business_type: credentials.business
       }
     })
     console.log("service created");
     navigate("Thankyou");
   }catch(err){
     throw new Error("Error creating new data")
   }
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
          <div className="w-full h-[60px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-clip h-full font-normal text-headercolor">
              Thank you for considering us!Here are the services we offer:
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
          </div>
          <div className="w-full h-[80px] flex flex-row items-center justify-center">
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
export default ServiceInfoForm;
