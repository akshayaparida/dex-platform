import React from 'react';

interface ButtonProps {
  label: string; // Text for the button
  onClick?: () => void; // Optional click handler
  variant?: 'primary' | 'secondary'; // Button variant
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // Base styles for all buttons
  const baseStyles =
    'w-[159px] h-[47px] text-[14px] rounded-[100px] font-medium shadow-md transition-transform duration-200';

    const textStyles = 'font-raleway font-extrabold leading-[16.44px]';

  // Styles for primary button (with gradient)
  const primaryStyles =
    'bg-gradient-to-r from-custom-yellow to-light-yellow hover:scale-105 text-black transform';

  // Styles for secondary button (without gradient)
  const secondaryStyles =
    ' border-2 bg-transparent  border-custom-yellow hover:bg-custom-yellow hover:text-black text-custom-yellow';

  return (
    <button
      className={`${baseStyles} ${textStyles} ${
        variant === 'primary' ? primaryStyles : secondaryStyles
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
