import React, { useContext } from "react";
import MainContext from "../context/MainContext";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Signup = ({ b = true }) => {
  const {
    loading,
    setLoading,
    setIsLoggedIn,
    step,
    setStep,
    phone,
    setPhone,
    name,
    setName,
    otp,
    setOtp,
    error,
    setError,
    inputRefs,
  } = useContext(MainContext);
  const navigate = useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only allows digits
    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (!newOtp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();

    // Call backend API to send OTP to the phone number
    setLoading(true);
    const result = await sendOtp(name, phone);
    setLoading(false);
    if (result) {
      setStep(2); // Move to OTP input step
      Swal.fire({
        icon: "Success",
        title: "Mobile OTP",
        text: "OTP sent successfully.",
      });
      // setError("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Server error",
        text: "Failed to send OTP. Please try again.",
      });
      // setError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("Submitted OTP:", otpValue);
    setLoading(true);
    // // Call backend API to verify OTP and create a new user
    const result = await verifyOtp(phone, otpValue);
    setLoading(false);
    if (result) {
      // Handle successful signup/login
      // console.log("OTP verified successfully!");
      Swal.fire({
        icon: "success",
        title: "Verify OTP",
        text: "OTP verified successfully!",
      });
      setError("");
      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);
      navigate("/menus");
    } else {
      // Swal.fire({
      //   icon: "error",
      //   title: "Verify OTP",
      //   text: "Invalid OTP. Please try again."
      // });
      setError("Invalid OTP. Please try again.");
    }
  };
  // if (loading) {
  //   return <Loading />; // Show loading component when loading
  // }

  return (
    <>
      {loading && <Loading />}
      <div
        className={`text-center w-[25rem] py-10 bg-white mx-auto mt-10 ${
          b && "z-50 shadow-md shadow-slate-400"
        } rounded-2xl border`}
      >
        <h1 className="text-2xl font-semibold mb-1">Sign In with Mobile OTP</h1>
        {/* <p>Find new ideas to try</p> */}
        <div className="text-left px-16 mt-3">
          {step === 1 && (
            <form onSubmit={handlePhoneSubmit}>
              <div>
                <label htmlFor="name" className="text-xs font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full my-1 rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)*$"
                />

                <label htmlFor="phone" className=" text-xs font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full my-1 rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                  placeholder="Enter your 10 digit phone number"
                  pattern="^[0-9]{10}$"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

              <button
                type="submit"
                className="block mx-auto bg-red-600  hover:bg-red-400 text-white w-full rounded-2xl px-5 py-2 mt-3 text-sm font-bold"
              >
                Send OTP
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleOtpSubmit}>
              <div className="mx-auto mt-6 flex flex-col items-start">
                <label htmlFor="otp" className="text-sm font-medium">
                  Enter OTP
                </label>
                {/* <input
                type="text"
                name="otp"
                id="otp"
                className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              /> */}
                <div className="flex justify-center items-center my-3 space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-10 h-10 border border-zinc-500 rounded-md text-center text-lg focus:border-sky-500 focus:outline focus:outline-sky-500"
                      ref={(el) => (inputRefs.current[index] = el)}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

              <button
                type="submit"
                className="block bg-red-600 text-white w-full rounded-3xl p-2 mt-3 text-sm font-bold"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default Signup;

// Function to call backend API for sending OTP
const sendOtp = async (name, phone) => {
  try {
    const response = await fetch("http://localhost:5000/api/user/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

// Function to call backend API for verifying OTP
const verifyOtp = async (phone, otp) => {
  try {
    const response = await fetch("http://localhost:5000/api/user/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, otp }),
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, token: data.token };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
};


