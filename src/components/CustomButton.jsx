import React from "react";

const CustomButton = ({ children, className = "", ...others }) => {
    return (
        <button
            className={`bg-primary px-7 py-2 rounded-xl text-white hover:bg-[#ca2227] hover:scale-110 transition-transform duration-300 ease-in-out text-sm font-medium ${className}`}
            {...others}
        >
            {children}
        </button>
    );
};

export default CustomButton;
