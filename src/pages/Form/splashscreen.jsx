import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[20rem] h-[13rem] flex flex-col">
        <div className="w-full h-1/2 flex flex-col justify-start items-center">
          <div className="w-[5rem] h-[5rem]">
            <img src="/logo1.png" alt="axra-logo" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col text-center justify-between">
          <h2 className="text-[1.25rem] text-headercolor font-normal font-Lato">
            Welcome to Axra Tech
          </h2>
          <p className="text-[16px] font-Lato text-headercolor font-light">
            Thanks for joining our survey. Your input matters.{" "}
            <Link to="">Let’s get started!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SplashScreen;
