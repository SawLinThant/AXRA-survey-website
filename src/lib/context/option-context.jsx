import { createContext, useContext, useState } from "react";

export const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("");
  const [industryAndService, setIndustryAndService] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [other, setOther] = useState("")
   console.log("Other Option selected:",other);
   console.log("Industry:",industry);
   console.log("Service selected:",industryAndService);
 // console.log("Other Option selected:",other);
  const SelectOption = (selectedOption) => {
    setOption(selectedOption);
  };

  const SelectIndustryAndService = (IndustyOrService) => {
    setIndustryAndService((prev) => {
      if(prev.includes(IndustyOrService)){
        return prev.filter((item) => item !== IndustyOrService)
      }else{
        return [...prev,IndustyOrService]
      }
    });
  };

  const SelectIndustry = (Industy) => {
    setIndustry((prev) => {
      if(prev.includes(Industy)){
        return prev.filter((item) => item !== Industy)
      }else{
        return [...prev,Industy]
      }
    });
  };

  const AddOtherOption = (other) => {
    setOther(other);
  };
  //console.log(other);


  //console.log(industryAndService);

  return (
    <OptionContext.Provider
      value={{
        option,
        industryAndService,
        other,
        industry,
        SelectOption,
        SelectIndustryAndService,
        AddOtherOption,
        SelectIndustry
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOption = () => {
  const context = useContext(OptionContext);
  if (context === null) {
    throw new Error("useOption must be used within a OptionProvider");
  }
  return context;
};
