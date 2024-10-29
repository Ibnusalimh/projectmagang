import React from "react";
import PropTypes from "prop-types";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full">
      {/* Icon */}
      <div className="mb-4">
        <img src={icon} alt={`${title} Icon`} className="w-16 h-16 object-contain" />
      </div>
      
      {/* Title */}
      <h4 className="text-2xl font-semibold text-gray-900 text-center">{title}</h4>
      
      {/* Description */}
      <p className="mt-2 text-lg text-slate-600 text-center">
        {description}
      </p>
    </div>
  );
};

BenefitCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitCard;
