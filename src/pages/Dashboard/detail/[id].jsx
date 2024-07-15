import InputField from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { GET_USERS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const {data, loading, error} = useQuery(GET_USERS);
  console.log(data);
  console.log(error)
  const handleBack = ()=>{
     navigate("/Dashboard")
  }
  console.log(isEditMode);
  const handleChange = (checked) => {
    setIsEditMode(checked);
  };
  const { register, handleSubmit } = useForm();

  if(loading) <div>Loading</div>
  return (
    <div className="w-full h-screen flex flex-col p-10 bg-background_color dark:bg-background-dark">
      <div className="w-full border-b-2 h-[5rem] flex flex-row items-center justify-between">
        <div className="h-full w-6">
          <Button onClick = {handleBack} variant="outline">
            <ArrowLeftIcon />
          </Button>
        </div>
        <div>
          <Switch
            id="edit-mode"
            checked={isEditMode}
            onCheckedChange={handleChange}
          />
          <Label htmlFor="edit-mode">Edit Mode</Label>
        </div>
      </div>
      <div className="w-full h-full p-4">
        {isEditMode ? (
          <form className=" w-full h-full ">
            <div className="w-full gap-7 grid md:grid-cols-2 lg:grid-cols-2 md:w-full p-4 lg:w-full">
              <InputField
                label="Name"
                id="name"
                name="name"
                value={"this is value"}
                onChange={handleChange}
                register={register}
                // placeholder="Enter your name"
              />
            </div>
            <div className="w-full flex justify-end mt-4">
                <Button>Save</Button>
            </div>
            {/* <div></div> */}
          </form>
        ) : (
          <div className="w-full h-full">
            <div className="w-full gap-7 grid md:grid-cols-2 lg:grid-cols-2 md:w-full p-4 lg:w-full">
              <div className="w-full h-[60px] flex flex-col">
                <label className="block font-semibold font-Inter text-[12px]">
                  Name
                </label>
                <div className="h-full flex flex-row items-center">
                  <p className="font-medium text-[12px] text-muted-foreground pl-4">
                  this is value
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Detail;
