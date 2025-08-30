import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Wallet,
  Clock,
  Home,
  GraduationCap,
  ShieldCheck,
  PiggyBank,
  HeartHandshake,
} from "lucide-react";
import Performance from "../../components/Performance";

const calculators = [
  { name: "Car Planning Calculator", path: "car-planning-calculator", icon: <Car className="text-green-600" size={32} /> },
  { name: "SIP Calculator", path: "sip-calculator", icon: <Wallet className="text-green-600" size={32} /> },
  { name: "Delay Planning Calculator", path: "delay-planning-calculator", icon: <Clock className="text-green-600" size={32} /> },
  { name: "House Planning Calculator", path: "house-planning-calculator", icon: <Home className="text-green-600" size={32} /> },
  { name: "Education Planning Calculator", path: "education-planning-calculator", icon: <GraduationCap className="text-green-600" size={32} /> },
  { name: "Life Insurance Calculator", path: "life-insurance-calculator", icon: <ShieldCheck className="text-green-600" size={32} /> },
  { name: "Lumpsum Calculator", path: "lumpsum-calculator", icon: <PiggyBank className="text-green-600" size={32} /> },
  { name: "Marriage Calculator", path: "marriage-calculator", icon: <HeartHandshake className="text-green-600" size={32} /> },
];

const FinancialCalculators = () => {
  const [activeTab, setActiveTab] = useState("calculators"); // default tab

  return (
    <div className="bg-[#F9F0D3]">
      {/* Header */}
      <div className="w-full flex h-[200px] bg-[#F9F0D3] items-center justify-center">
        <h1 className="text-gray-600 text-5xl md:text-6xl font-bold">
          Financial Tools
        </h1>
      </div>
      {/* 🌟 Stylish Toggler */}
      <div className="flex justify-center mt-8">
        <div className="relative flex bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
          {/* Active Highlight Bar */}
          <div
            className={`absolute top-0 bottom-0 w-1/2 bg-green-600 transition-transform duration-300 ease-in-out rounded-2xl`}
            style={{
              transform:
                activeTab === "calculators"
                  ? "translateX(0%)"
                  : "translateX(100%)",
            }}
          ></div>

          {/* Buttons */}
          <button
            onClick={() => setActiveTab("calculators")}
            className={`relative z-10 px-8 py-3 font-semibold transition ${activeTab === "calculators"
                ? "text-white"
                : "text-gray-600 hover:text-green-600"
              }`}
          >
            Calculators
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className={`relative z-10 px-8 py-3 font-semibold transition ${activeTab === "performance"
                ? "text-white"
                : "text-gray-600 hover:text-green-600"
              }`}
          >
            Performance
          </button>
        </div>
      </div>


      {/* Content */}
      <div className="max-w-6xl mx-auto mt-10 px-6 border border-gray-300 rounded-2xl shadow-md py-10 bg-[#F9F0D3]">
        {activeTab === "calculators" ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {calculators.map((calc, index) => (
              <Link
                key={index}
                to={`/tools/financial-calculators/${calc.path}`}
                className="p-6 rounded-2xl border border-gray-300 shadow-md bg-white hover:shadow-lg hover:bg-green-50 transition flex flex-col justify-center items-center text-center"
              >
                {calc.icon}
                <span className="mt-3 text-lg font-semibold text-gray-700">
                  {calc.name}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700 text-lg p-10 bg-white rounded-2xl shadow-md">
            <Performance />
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialCalculators;
