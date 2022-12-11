import React from "react";

const Button = ({ text, onClick, innerRef, disabled }) => {
    return (
        <button
            onClick={() => onClick()}
            disabled={disabled}
            type="button"
            className="w-full justify-center rounded-md border border-gray-300 bg-gray-200 px-[4px] py-[2px] text-base font-medium text-gray-700 shadow-sm hover:bg-gray-300 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
            ref={innerRef}
        >
            {text}
        </button>
    );
};

export default Button;
