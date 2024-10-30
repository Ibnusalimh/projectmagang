import React from "react";
import PropTypes from "prop-types";
import Chip from './Chip';

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-2xl w-full">
        {/* Subtitle */}
        <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Benefit' background='#fff4f9' ring='primary'/>
                    </div>
        {/* Title */}
        <h3 className="mt-3 text-5xl tracking-tighter leading-none text-gray-900 text-center md:text-4xl">
          {title}
        </h3>
        {/* Description */}
        <p className="mt-6 text-xl text-slate-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
