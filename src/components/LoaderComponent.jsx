import { Loader } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <Loader className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default LoaderComponent;
