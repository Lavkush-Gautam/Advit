import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const TermInsurance = () => {
  const types = [
    { name: "Pure Term Plans", desc: "Affordable life cover with high sum assured." },
    { name: "Return of Premium Plans", desc: "Get your premiums back on policy maturity." },
    { name: "Group Term Plans", desc: "Special coverage for employees or groups." },
    { name: "Critical Illness Riders", desc: "Additional protection against major illnesses." }
  ];

  const benefits = [
    { name: "Financial Security", desc: "Ensure your loved ones are financially secure in your absence." },
    { name: "Affordable Premiums", desc: "High coverage at low premium rates." },
    { name: "Flexibility", desc: "Choose policy duration and riders as per your needs." },
    { name: "Tax Savings", desc: "Enjoy tax benefits under Section 80C & 10(10D)." },
    { name: "Peace of Mind", desc: "Focus on your goals while we secure your family’s future." }
  ];

  return (
    <ServiceLayout
      title="Term Insurance"
      subtitle="Protect What Matters Most."
      description="Life is unpredictable, but your family’s future doesn’t have to be. 
      Term insurance offers financial security and peace of mind at an affordable cost."
      types={types}
      benefits={benefits}
      ctaText="Ensure your family’s future with a term insurance plan."
      ctaAction={() => alert('Explore Term Insurance')}
    />
  );
};

export default TermInsurance;
