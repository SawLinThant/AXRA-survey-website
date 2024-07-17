import InputField from "@/components/CustomInput";
import { CREATE_PARTNER } from "@/graphql/mutations/formMutation";
import { useOption } from "@/lib/context/option-context";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PartnerInfoForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { option, industryAndService, other } = useOption();
  const category = other && other.length > 0 ? other : industryAndService;
  const [CreatePartner, { loading }] = useMutation(CREATE_PARTNER);
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (credentials) => {
    try {
      console.log(industryAndService);
      await CreatePartner({
        variables: {
          name: credentials.name,
          company_name: credentials.company_name,
          content_infromation: credentials.phone,
          user_type: option,
          business_type: credentials.business,
          why_partner: credentials.reason,
          offer: credentials.offer,
          service_type: category,
        },
      });
      console.log("Partner created");
      navigate("/Form/Thankyou");
    } catch (err) {
      throw new Error("Error creating partner");
    }
  });

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
          <div className="w-full h-[90px] text-center leading-8">
            <h2 className="font-Lato text-[20px] text-center h-full font-normal text-headercolor ">
              How can we reach you?
            </h2>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="w-full flex flex-col gap-[40px]">
            <InputField
              label="Name"
              id="name"
              name="name"
              error={errors}
              register={register}
              placeholder="Enter your name"
            />
            <InputField
              label="Company Name"
              id="company_name"
              name="company_name"
              error={errors}
              register={register}
              placeholder="Enter your Company Name"
            />
            <InputField
              label="Contact Information"
              id="phone"
              name="phone"
              error={errors}
              register={register}
              placeholder="Enter your phone number"
            />
            <InputField
              label="Your Business Type"
              id="business"
              name="business"
              error={errors}
              register={register}
              placeholder="Enter the type of your business"
            />
            <InputField
              label="Why partner with us?"
              id="reason"
              name="reason"
              error={errors}
              register={register}
              placeholder="Please share your reason with us"
            />
            <InputField
              label="What can you offer to us?"
              id="offer"
              name="offer"
              error={errors}
              register={register}
              placeholder="Please describe what you can offer us."
            />
          </div>
          <div className="w-full h-[80px] flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-[100px] flex items-center justify-center mt-4 h-[40px] border rounded-[20px] bg-gradient-to-r from-company_pink to-company_purple text-[12px] font-Inter"
            >
              {loading? (<Loader2 className="w-4 h-4 animate-spin mr-1.5" />): null}
              {loading ? "submiting" : "submit"}
            </button>
          </div>
          <div className="h-[20px]"></div>
        </form>
      </div>
    </div>
  );
};
export default PartnerInfoForm;
