import React from "react";

const Button = ({
  children,
  variant= "",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-white border-primary hover:borderborder-color hover:text-[#111111]",

    secondary: "bg-linear-to-r from-primary-from to-primary-to text-white",

    outline: "border border-black text-[#111111] bg-white hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        font-medium border-2 rounded-[10px] cursor-pointer
        transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
