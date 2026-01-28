import React from "react";

const Button = ({
  children,
  variant= "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-white border-primary hover:border-border-color hover:bg-white hover:text-[#111111]",

    secondary: "bg-linear-to-r from-primary-from to-primary-to  text-white hover:border-border-color hover:bg-none hover:text-[#111111]",

    outline: "border border-border-color text-[#111111] bg-white hover:border-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`
        font-medium border rounded-[10px] cursor-pointer
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
