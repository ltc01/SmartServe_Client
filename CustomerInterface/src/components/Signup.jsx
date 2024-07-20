import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash, FaPinterest } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
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

const Signup = ({ b = true, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Phone input, Step 2: OTP input
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);

  const handleToggle = () => {
    setIcon(type === "password" ? FaEye : FaEyeSlash);
    setType(type === "password" ? "text" : "password");
  };

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

      // Store the token in local storage
      localStorage.setItem("token", result.token);

      // Redirect or update UI as needed
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
      <FaPinterest className="text-[#e60023] text-3xl mx-auto" />
      <h1 className="text-3xl font-semibold mb-1">Welcome to SmartServe</h1>
      <p>Find new ideas to try</p>
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

// Signup.propTypes = {
//   b: PropTypes.bool,
// };

// import React, { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { CiFacebook } from 'react-icons/ci';
// import { FaEye, FaEyeSlash, FaPinterest } from 'react-icons/fa';
// import { MdError } from 'react-icons/md';
// // import PropTypes from 'prop-types';

// export const Signup = ({ b=true }) => {
//   const [type, setType] = useState('password');
//   const [icon, setIcon] = useState(FaEyeSlash);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleToggle = () => {
//     setIcon(type === 'password' ? FaEye : FaEyeSlash);
//     setType(type === 'password' ? 'text' : 'password');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await registerUser(email, password, birthDate);

//     alert("You are registered successfully!")

//     // Clear form fields after submission
//     setEmail('');
//     setPassword('');
//     setBirthDate('');
//   };

//   return (
//     <div
//       className={`text-center w-[25rem] py-4 bg-white mx-auto mt-7 ${
//         b && 'z-50 shadow-xl'
//       } rounded-2xl`}
//     >
//       {/* Headings section */}
//       <div>
//         <FaPinterest className="text-[#e60023] text-3xl mx-auto" />
//         <h1 className="text-3xl font-semibold mb-1">Welcome to SmartServe</h1>
//         <p>Find new ideas to try</p>
//       </div>
//       <div className="text-left px-20 mt-2">
//         {/* Login form */}
//         <form onSubmit={handleSubmit}>
//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="text-xs">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoFocus={b}
//               required
//             />
//           </div>
//           {/* Password field */}
//           <div>
//             <label htmlFor="pass" className="text-xs">
//               Password
//             </label>
//             <div className="flex">
//               <input
//                 type={type}
//                 name="pass"
//                 id="pass"
//                 className="w-full border border-zinc-500 text-sm p-3 rounded-2xl focus:ring-1 focus:outline-none focus:border-blue-400 focus:ring-blue-200"
//                 placeholder="Create a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span
//                 className="-ml-8 mt-3 cursor-pointer"
//                 onClick={handleToggle}
//               >
//                 {icon}
//               </span>
//             </div>
//           </div>
//           {/* Birthday Field */}
//           <div>
//             <label htmlFor="birthDate" className="text-xs">
//               Birthdate
//             </label>
//             <div className="group inline relative">
//               <MdError className="inline text-base text-slate-600 ml-1 mb-1 hover:cursor-pointer" />
//               <div className="w-44 bg-black text-white absolute -top-12 p-2 rounded-md text-[0.65rem] tracking-tight leading-3 text-start hidden group-hover:inline-flex group-hover:z-50">
//                 <p>
//                   To help keep Pinterest safe, we now require your birthdate.
//                   Your birthdate also helps us provide more personalized
//                   recommendations and relevant ads. We don&apos;t share this
//                   information and it won&apos;t be visible on your profile.
//                 </p>
//               </div>
//             </div>
//             <input
//               type="date"
//               name="birthDate"
//               id="birthDate"
//               className="w-full rounded-2xl border border-zinc-500 p-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
//               placeholder="dd-----yyyy"
//               value={birthDate}
//               onChange={(e) => setBirthDate(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="block bg-red-600 text-white w-full rounded-3xl p-2 mt-3 text-sm font-bold"
//           >
//             Continue
//           </button>
//         </form>
//         {/* Other Singing Options */}
//         <div>
//           <h2 className="font-bold m-1 text-xs text-center">OR</h2>
//           <button className="block bg-blue-600 text-white w-full rounded-3xl p-2 font-bold text-xs ">
//             <CiFacebook className="inline text-2xl" /> Continue with Facebook
//           </button>
//           <button className="block w-full rounded-3xl p-2 font-bold border-2 border-zinc-400 my-2 text-xs">
//             Continue as User <FcGoogle className="inline" />
//           </button>
//         </div>
//         {/* Terms & Conditions */}
//         <div className="mx-auto text-[0.65rem] text-center">
//           <p>
//             {/* By continuing, you agree to Pinterest&apos;s <br />
//             <a href="" className="font-bold hover:underline">
//               Terms of Service{" "}
//             </a>
//             and acknowledge you&apos;ve read our{" "}
//             <a href="" className="font-bold hover:underline">
//               Privacy Policy.{" "}
//             </a>
//             <a href="" className="font-bold hover:underline">
//               Notice at collection.
//             </a>
//             <br />
//             Not on Pinterest yet?
//             <a href="" className="font-bold hover:underline">
//               {" "}
//               Sign up
//             </a>
//             <br /> */}
//             Already a member?
//             <a href="#login" className="font-bold hover:underline">
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Signup.propTypes = {
// //   b: PropTypes.bool,
// // };

// // Define registerUser function here or import from another file
// const registerUser = async (email, password, birthDate) => {
//   try {
//     const response = await fetch('http://localhost:5000/api/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, birthDate }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       console.log('Registration successful:', data);
//     } else {
//       console.error('Registration failed:', data.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
