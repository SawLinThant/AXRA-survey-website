import { createContext, useContext, useState } from "react";

export const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("");
  const [industryAndService, setIndustryAndService] = useState([]);
  const [other, setOther] = useState("")
   console.log("Other Option selected:",other);
   console.log("Industry selected:",industryAndService);
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
        SelectOption,
        SelectIndustryAndService,
        AddOtherOption
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
