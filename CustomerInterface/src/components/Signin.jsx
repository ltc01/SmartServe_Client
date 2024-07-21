// import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// import { FaPinterest } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { CiFacebook } from 'react-icons/ci';
// import { Link, useNavigate } from 'react-router-dom';

// export const Signin = ({ b=true, setIsLoggedIn }) => {
//   const [step, setStep] = useState(1); // Step 1: Phone input, Step 2: OTP input
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Function to send OTP
//   const sendOtp = async (phoneNumber) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/send-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ phone: phoneNumber }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert("Otp sent successfully!")
//         return true;
//       } else {
//         console.error('Failed to send OTP:', data.message);
//         alert('Failed to send OTP:', data.message)
//         return false;
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       return false;
//     }
//   };

//   // Function to verify OTP
//   const verifyOtp = async (phoneNumber, otpCode) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ phone: phoneNumber, otp: otpCode }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert("You are logged in successfully!")
//         return true;
//       } else {
//         console.error('Invalid OTP:', data.message);
//         alert("Invalid Otp!!")
//         return false;
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       return false;
//     }
//   };

//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     const result = await sendOtp(phone);
//     if (result) {
//       setStep(2); // Move to OTP input step
//       setError('');
//     } else {
//       setError('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     const result = await verifyOtp(phone, otp);
//     if (result) {
//       console.log('OTP verified successfully!');
//       setError('');
//       setIsLoggedIn(true)
//       // Redirect to user page after successful login
//       navigate('/menus')
//     } else {
//       setError('Invalid OTP. Please try again.');
//     }
//     // setshowLogin();
//   };

//   return (
//     <div className={`text-center w-[25rem] mx-auto mt-10 py-6 shadow-2xl relative bg-white rounded-2xl ${b ? "z-50" : ""}`}>
//       <FaPinterest className="text-[#e60023] text-3xl mx-auto" />
//       <h1 className="text-3xl font-semibold mb-4">Welcome to Pinterest</h1>
//       <div className="text-left px-20">
//         {error && <p className="text-red-600 text-xs mb-2">{error}</p>}
//         {step === 1 && (
//           <form onSubmit={handlePhoneSubmit}>
//             <label htmlFor="phone" className="text-xs">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               id="phone"
//               className="w-full rounded-2xl border border-zinc-500 p-3 mb-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-400"
//               placeholder="Enter your phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button type="submit" className="block bg-red-600 text-white w-full rounded-3xl p-2 my-2 text-sm font-bold">
//               Send OTP
//             </button>
//           </form>
//         )}
//         {step === 2 && (
//           <form onSubmit={handleOtpSubmit}>
//             <label htmlFor="otp" className="text-xs">OTP</label>
//             <input
//               type="text"
//               name="otp"
//               required
//               id="otp"
//               className="w-full rounded-2xl border border-zinc-500 p-3 mb-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-400"
//               placeholder="Enter the OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button type="submit" className="block bg-red-600 text-white w-full rounded-3xl p-2 my-2 text-sm font-bold">
//               Verify OTP
//             </button>
//           </form>
//         )}
//         {step === 1 && (
//           <>
//             <h2 className="font-bold m-2 text-xs text-center">OR</h2>
//             <button className="block bg-blue-600 text-white w-full rounded-3xl p-2 font-bold text-xs">
//               <CiFacebook className="inline text-2xl" /> Continue with Facebook
//             </button>
//             <button className="block w-full rounded-3xl p-2 font-bold border-2 border-zinc-400 my-2 text-xs">
//               Continue as User <FcGoogle className="inline" />
//             </button>
//           </>
//         )}
//         <div className="mx-auto text-[0.6rem] text-center mt-2">
//           <p>
//             By continuing, you agree to Pinterest's
//             <br />
//             <a href="" className="font-bold hover:underline">Terms of Service</a>
//             and acknowledge you've read our
//             <br />
//             <a href="" className="font-bold hover:underline">Privacy Policy</a>.
//             <a href="" className="font-bold hover:underline">Notice at collection.</a>
//             <br />
//             <b><Link to={'/signup'} >Not on Pinterest yet? Sign up</Link></b>
            
//             <br />
//             Are you a business? <a href="" className="font-bold hover:underline">Get started here!</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Login.propTypes = {
// //   b: PropTypes.bool,
// //   setshowLogin: PropTypes.func.isRequired,
// // };
