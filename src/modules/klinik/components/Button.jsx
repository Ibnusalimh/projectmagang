import React from 'react';

function Button({ variant, text, onClick, className = "" }) {
  const baseClasses = "overflow-hidden gap-2 self-stretch px-5 py-2.5 rounded-lg";
  const variantClasses = {
    primary: "bg-pink-700 text-white border border-pink-700 border-solid shadow-sm",
    secondary: "bg-white text-slate-700",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
