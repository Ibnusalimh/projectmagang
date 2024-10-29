// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant, text, onClick, disabled }) {
  const baseClasses = "overflow-hidden gap-2 self-stretch px-5 py-2.5 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-[#C96895] text-white border border-[#C96895] shadow-sm hover:bg-[#B3587E] focus:ring-[#C96895]",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 focus:ring-slate-500",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ""}`} 
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
