const ThankYou = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-y-hidden">
      <div className="w-[20rem] h-[13rem] flex flex-col mb-[7rem]">
        <div className="w-full h-1/2 flex flex-col justify-start items-center">
          <div className="w-[5rem] h-[5rem]">
            <img src="/logo1.png" alt="axra-logo" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col text-center justify-between">
          <h2 className="text-[1.25rem] text-headercolor font-normal font-Lato">
            Thank You For Your Time!
          </h2>
          <p className="text-[16px] font-Lato text-headercolor font-light">
            We appreciate your input and will be in touch with you soon.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
