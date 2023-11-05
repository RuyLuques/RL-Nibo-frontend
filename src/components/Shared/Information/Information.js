import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';

const Information = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div
                className="relative inline-block group"
                onClick={toggleTooltip}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <InformationCircleIcon className="h-12 w-12 text-yellow-500 cursor-pointer" />

                {showTooltip && (
                    <div className="bg-yellow-500 text-black text-xs absolute top-12 left-1/2 transform -translate-x-1/2 p-2 rounded-md">
                        <span className="block">Example page!</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Information;
