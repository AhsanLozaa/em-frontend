import React, { useRef } from "react";
import "./styles.scss";

const OTPInput = ({ length = 6, onChange }) => {
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const digit = value.match(/\d/); // Extract the digit from the value using regex (only allow digits)
    if (digit) {
      inputRefs.current[index].value = digit[0]; // Set the input value to the digit
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      onChange(getOtpValue());
    } else {
      inputRefs.current[index].value = ""; // Clear the input if non-digit input is entered
    }
  };

  const handleInputKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0) {
      if (inputRefs.current[index].value === "") {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInputPaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");
    if (/^\d+$/.test(pasteData)) {
      const otpArray = pasteData.split("").slice(0, length);
      otpArray.forEach((otp, index) => {
        inputRefs.current[index].value = otp;
      });
      onChange(getOtpValue());
    }
  };

  const getOtpValue = () => {
    const otp = inputRefs.current.map((inputRef) => inputRef.value).join("");
    return otp.substring(0, length);
  };

  return (
    <div className="otp-input">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleInputKeyDown(index, e)} // backspace listener
          onPaste={handleInputPaste}
        />
      ))}
    </div>
  );
};

export default OTPInput;
