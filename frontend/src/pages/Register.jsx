import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import finance1 from "../assets/finance1.webp";
import finance2 from "../assets/finance2.jpg";

const Register = () => {
  const formRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        leftPanelRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        rightPanelRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <div className="flex h-screen bg-[#F9F0D3] text-gray-800">
      {/* Left panel */}
      <div
        ref={leftPanelRef}
        className="hidden md:flex flex-1 flex-col items-center justify-center p-10 bg-white"
      >
        <img
          src={finance2}
          alt="Financial Growth"
          className="rounded-lg shadow-lg w-3/4"
        />
        <p className="mt-6 text-center text-lg font-medium text-green-600">
          Secure your financial journey with us.
        </p>
      </div>

      {/* Right panel (form) */}
      <div
        ref={rightPanelRef}
        className="flex flex-1 items-center justify-center bg-[#F9F0D3]"
      >
        <div
          ref={formRef}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Create an Account
          </h2>

          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#F9F0D3]"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#F9F0D3]"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#F9F0D3]"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#F9F0D3]"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setShowTerms(e.target.checked)}
              />
              <span className="text-sm">
                I agree to the{" "}
                <Link
                  to="/privacy-policy"
                  className="text-green-600 hover:underline"
                >
                  Terms & Privacy Policy
                </Link>
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          {/* Already have account */}
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
