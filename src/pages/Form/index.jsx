import { Route, Routes } from "react-router-dom"
import SplashScreen from "./splashscreen"
import SelectOption from "./selectoption"
import IndustrySelector from "./Job/industry"
import JobInfoForm from "./Job/job-info-form"
import ThankYou from "./thankyou"
import Service from "./ServiceFinder/service"
import ServiceInfoForm from "./ServiceFinder/service-info-form"
import PartnerService from "./Partner/partner-service"
import PartnerInfoForm from "./Partner/partner-infoform"
import { OptionProvider } from "@/lib/context/option-context"

const Form = () => {
    return(
        <OptionProvider>
        <div className="w-full md:w-[53rem] h-full p-[22px] bg-background_color">
            <div className="w-full h-full rounded-[20px] border-[5px] border-form_border bg-background_color">
                <Routes>
                    <Route path="*" element={<SplashScreen/>}/>
                    <Route path="Selectoptions" element={<SelectOption/>} />
                    <Route path="Industry" element={<IndustrySelector/>} />
                    <Route path="Jobinfoform" element={<JobInfoForm/>} />
                    <Route path="Thankyou" element={<ThankYou/>} />
                    <Route path="Services" element={<Service/>} />
                    <Route path="Servicesinfoform" element={<ServiceInfoForm/>} />
                    <Route path="Partnerservice" element={<PartnerService/>} />
                    <Route path="Partnerinfoform" element={<PartnerInfoForm/>} />
                </Routes>
            </div>
        </div>
        </OptionProvider>
    )
}

export default Form