import InputField from "@/components/CustomInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CREATE_JOB } from "@/graphql/mutations/formMutation";
import { useOption } from "@/lib/context/option-context";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const JobInfoForm = () => {
  const {register,handleSubmit} = useForm();
  const {option,industryAndService} = useOption();
  const [createJob] = useMutation(CREATE_JOB);
  const navigate = useNavigate();
  const onSubmit= handleSubmit(async(credentials)=> {
    try{
       await createJob({
        variables:{
          name: credentials.name,
          contentInformation: credentials.phone,
          user_type: option, 
          job_type: industryAndService, 
          eduction: credentials.education,
          isWorking: credentials.employed === "Yes"? true : false,
          working_industries: credentials.industry,
          skills: credentials.skill,
        }
      })
      console.log("Job created");
      navigate("Thankyou");
    }catch(err){
      throw new Error("Error creating new data")
    }
  }) ;
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
        <form onSubmit={onSubmit}>
        <div className="w-full flex flex-col gap-[40px]">
          
          <InputField
            label="Name"
            id="name"
            name="name"
            //  value={signUpData.username}
            register={register}
            placeholder="Enter your name"
          />
          <InputField
            label="Contact Information"
            id="phone"
            name="phone"
            //  value={signUpData.username}
            register={register}
            placeholder="Enter your Phone Number"
          />
          <InputField
            label="Education"
            id="education"
            name="education"
            //  value={signUpData.username}
            register={register}
            placeholder="Enter your highest education degree"
          />
          <div className="w-full h-[51px] flex flex-col gap-[16px]">
            <p className="text-[12px] font-semibold font-Inter">
              Currently Employed
            </p>
            <RadioGroup className="flex flex-row w-[108px] h-[20px] gap-[16px]"  defaultValue="No"  {...register("employed")}>
              <div className="flex flex-row gap-[5px]">
                <RadioGroupItem value="Yes" id="Yes" />
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
            register={register}
            placeholder="E.g. Web Development, Sales & Marketing"
          />
          <InputField
            label="Skill"
            id="skill"
            name="skill"
            //  value={signUpData.username}
            register={register}
            placeholder="E.g. Java, Python"
          />
        </div>
        <div className="w-full h-[80px] flex flex-row items-center justify-center">
          <button type="submit" className="w-[100px] mt-4 h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter">
            Submit
          </button>
        </div>
        <div className="h-[20px]"></div>
        </form>
      </div>
    </div>
  );
};
export default JobInfoForm;
