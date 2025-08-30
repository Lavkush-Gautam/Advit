import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const EducationPlanning = () => {
  const types = [
    { name: "Child Plans", desc: "Secure your child’s future with guaranteed returns." },
    { name: "Education Savings Plans", desc: "Build a dedicated fund for higher education expenses." },
    { name: "SIP Investments", desc: "Systematic investments to grow education corpus over time." },
    { name: "Scholarship Linked Plans", desc: "Plans that support your child with bonuses and payouts." }
  ];

  const benefits = [
    { name: "Future Security", desc: "Ensure uninterrupted education for your child." },
    { name: "Inflation Protection", desc: "Beat rising education costs with planned savings." },
    { name: "Custom Plans", desc: "Tailored to your child’s education milestones." },
    { name: "Tax Benefits", desc: "Enjoy deductions while investing in your child’s future." },
    { name: "Peace of Mind", desc: "Stay worry-free knowing your child’s education is secured." }
  ];

  return (
    <ServiceLayout
      title="Education Planning"
      subtitle="Invest in Their Future Today."
      description="Education is the foundation of your child’s success. 
      At Advit Capital Advisor Private Limited, we help you plan early for your child’s higher education and career goals."
      types={types}
      benefits={benefits}
      ctaText="Give your child the future they deserve with smart education planning."
      ctaAction={() => alert('Explore Education Planning')}
    />
  );
};

export default EducationPlanning;
