import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";

const InputField = ({
  label,
  id,
  name,
  type = "text",
  onChange,
  value,
  placeholder,
  register,
  error,
  requireSymbol
}) => {
  const hasError = get(error, name);
  const [focus, setFocus] = useState(false);
  const inputRef = React.useRef < HTMLInputElement > null;

  const myanmarPhoneNumberPattern = /^09\d{7,9}$/;

  const handleFocus = () => {
    setFocus(true);
  };

  console.log(focus);
  console.log(hasError);

  useEffect(() => {
    const inputElemet = inputRef.current;
    if (inputElemet) {
      inputElemet.addEventListener("focus", handleFocus);

      return () => {
        inputElemet.removeEventListener("focus", handleFocus);
      };
    }
  });

  return (
    <div className="w-full md:w-[300px] lg:w-[300px] h-[60px] gap-[5px] flex flex-col">
      <label
        htmlFor={id}
        className="font-semibold font-Inter text-[12px] flex flex-row text-headercolor"
      >
        {label}
        {hasError ? <p className="text-red-700">*</p> : requireSymbol}
      </label>

      {type === "number" && name === "phone" ? (
        <input
          className={clsx(
            "h-[40px] px-[20px] text-[12px] font-Inter w-full border-[0.5px] rounded-[10px] text-headercolor focus:border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300",
            {
              "border-rose-700": hasError,
            }
          )}
          id={id}
          type={type}
          name={name}
          {...register(name, {
            required: `${name} is required`,
            pattern: {
              value: myanmarPhoneNumberPattern,
              message: "Invalid Myanmar phone number",
            },
          })}
          value={value}
          onChange={onChange}
          placeholder={hasError ? "Invalid Phone Number" : placeholder}
          // placeholder={placeholder}
        />
      ) : (
        <input
          className={clsx(
            "h-[40px] px-[20px] text-[12px] font-Inter w-full border-[0.5px] rounded-[10px] text-headercolor focus:border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300",
            {
              "border-rose-700": hasError,
            }
          )}
          id={id}
          type={type}
          name={name}
          {...register(name, {
            required: `${name} is required`,
          })}
          value={value}
          onChange={onChange}
          placeholder={hasError ? "Invalid" : placeholder}
          // placeholder={placeholder}
        />
      )}
    </div>
  );
};
export default InputField;
