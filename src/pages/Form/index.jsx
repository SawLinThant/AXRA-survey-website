import { OptionProvider } from "@/lib/context/option-context";
import { Route, Routes } from "react-router-dom";
import IndustrySelector from "./Job/industry";
import JobInfoForm from "./Job/job-info-form";
import PartnerInfoForm from "./Partner/partner-infoform";
import PartnerService from "./Partner/partner-service";
import SelectOption from "./selectoption";
import Service from "./ServiceFinder/service";
import ServiceInfoForm from "./ServiceFinder/service-info-form";
import SplashScreen from "./splashscreen";
import ThankYou from "./thankyou";

const Form = () => {
  return (
    <OptionProvider>
      <div className="w-full md:w-full lg:w-full bg-background_color ">
        <div className="w-full rounded-[20px] border-[5px] border-form_border bg-white">
          <Routes>
            <Route path="*" element={<SplashScreen />} />
            <Route path="Selectoptions" element={<SelectOption />} />
            <Route path="Industry" element={<IndustrySelector />} />
            <Route path="Jobinfoform" element={<JobInfoForm />} />
            <Route path="Thankyou" element={<ThankYou />} />
            <Route path="Services" element={<Service />} />
            <Route path="Servicesinfoform" element={<ServiceInfoForm />} />
            <Route path="Partnerservice" element={<PartnerService />} />
            <Route path="Partnerinfoform" element={<PartnerInfoForm />} />
          </Routes>
        </div>
      </div>
    </OptionProvider>
  );
};

export default Form;
