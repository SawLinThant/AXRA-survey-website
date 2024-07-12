import { Route, Routes } from "react-router-dom"
import SplashScreen from "./splashscreen"
import SelectOption from "./selectoption"
import IndustrySelector from "./industry"

const Form = () => {
    return(
        <div className="w-full md:w-[53rem] h-[100vh] p-[22px] bg-background_color">
            <div className="w-full h-full rounded-[20px] border-[5px] border-form_border bg-background_color">
                <Routes>
                    <Route path="*" element={<SplashScreen/>}/>
                    <Route path="Selectoptions" element={<SelectOption/>} />
                    <Route path="Industry" element={<IndustrySelector/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Form