import React, { useState } from "react";

const IconButton = ({ onClick, className, children, tooltip }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative">
            <div
                onClick={onClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 ${className}`}
            >
                {children}
            </div>
            {showTooltip && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                bg-gray-900 text-gray-100 text-xs py-1 px-2 rounded whitespace-nowrap shadow-md">
                    {tooltip}
                </div>
            )}
        </div>
    );
};

export default IconButton; 