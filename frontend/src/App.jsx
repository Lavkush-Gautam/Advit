import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import InvestorMeet from './pages/InvestorMeet';
import MutualFund from './pages/services/MutualFund';
import TaxPlanning from './pages/services/TaxPlanning';
import RetirementPlanning from './pages/services/RetirementPlanning';
import HealthInsurance from './pages/services/HealthInsurance';
import TermInsurance from './pages/services/TermInsurance';
import EducationPlanning from './pages/services/EducationPlanning';
import FinancialCalculators from './pages/tools/FinancialCalculators';
import FinancialHealth from './pages/tools/FinancialHealth';
import RiskProfile from './pages/tools/RiskProfile';
import PayPremiumOnline from './pages/tools/PayPremiumOnline';
import UsefulLinks from './pages/tools/UsefulLinks';
import ModularCalculator from './components/ModularCalculator';
import Blogs from './pages/Blogs';
import PerformanceTabs from './components/PerformenceTabs';
import ScrollToTop from './components/ScrollToTop';
import FundPerformance from './components/FundPerformence';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* 👇 This will reset scroll on every route change */}
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* About Us Section */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/our-story" element={<AboutUs />} />
        <Route path="/about-us/investor-meet" element={<InvestorMeet />} />

        {/* Services Section */}
        <Route path="/services/mutual-fund" element={<MutualFund />} />
        <Route path="/services/tax-planning" element={<TaxPlanning />} />
        <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
        <Route path="/services/health-insurance" element={<HealthInsurance />} />
        <Route path="/services/term-insurance" element={<TermInsurance />} />
        <Route path="/services/education-planning" element={<EducationPlanning />} />

        {/* Tools Section */}
        <Route path="/tools/financial-calculators" element={<FinancialCalculators />} />
        <Route path="/tools/financial-health" element={<FinancialHealth />} />
        <Route path="/tools/risk-profile" element={<RiskProfile />} />
        <Route path="/tools/pay-premium-online" element={<PayPremiumOnline />} />
        <Route path="/tools/useful-links" element={<UsefulLinks />} />

        {/* Calculator Routes */}
        <Route path="/tools/financial-calculators/car-planning-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/sip-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/house-planning-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/delay-planning-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/education-planning-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/life-insurance-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/lumpsum-calculator" element={<ModularCalculator />} />
        <Route path="/tools/financial-calculators/marriage-calculator" element={<ModularCalculator />} />

        {/* Performance Tabs */}
        <Route path="/tools/financial-calculators/sip-performance" element={<PerformanceTabs defaultTab="SIP" />} />
        <Route path="/tools/financial-calculators/stp-performance" element={<PerformanceTabs defaultTab="STP" />} />
        <Route path="/tools/financial-calculators/swp-performance" element={<PerformanceTabs defaultTab="SWP" />} />
        <Route path="/tools/financial-calculators/fund-performance" element={<FundPerformance />} />
        <Route path="/tools/financial-calculators/scheme-performance" element={<PerformanceTabs defaultTab="Scheme" />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
