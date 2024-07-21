import React, { useContext } from "react";
import MainContext from "../context/MainContext";

const Signup = ({ b = true }) => {
  const {
    setIsLoggedIn,
    navigate,
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
  } = useContext(MainContext);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    // Call backend API to send OTP to the phone number
    const result = await sendOtp(name, phone);
    if (result) {
      setStep(2); // Move to OTP input step
      setError("");
    } else {
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // Call backend API to verify OTP and create a new user
    const result = await verifyOtp(phone, otp);
    if (result) {
      // Handle successful signup/login
      console.log("OTP verified successfully!");
      setError("");
      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);
      navigate("/menus");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div
      className={`text-center w-[25rem] py-4 bg-white mx-auto mt-7 ${
        b && "z-50 shadow-xl"
      } rounded-2xl`}
    >
      <h1 className="text-3xl font-semibold mb-1">Welcome to SmartServe</h1>
      {/* <p>Find new ideas to try</p> */}
      <div className="text-left px-20 mt-2">
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit}>
            <div>
              <label htmlFor="name" className="text-xs">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="phone" className="text-xs">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="block bg-red-600 text-white w-full rounded-3xl p-2 mt-3 text-sm font-bold"
            >
              Send OTP
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div>
              <label htmlFor="otp" className="text-xs">
                OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="block bg-red-600 text-white w-full rounded-3xl p-2 mt-3 text-sm font-bold"
            >
              Verify OTP
            </button>
          </form>
        )}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </div>
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