import React, { useState } from 'react';

function CollapsibleCard({ title, content }) {
    const [showSpan, setShowSpan] = useState(false);

    const handleButtonClick = () => {
        setShowSpan(!showSpan);
    };

    return (
        <>
            <div className="w-full shadow rounded cursor-pointer pb-6 px-4 py-2 bg-gray-50 opacity-75">
                <div className="flex flex-row">
                    <div className="basis-4/5">
                        <h1 className="text-lg">{title}</h1>
                    </div>
                    <div className="basis-1/5 flex flex-row-reverse">
                        <button onClick={handleButtonClick}>﹀</button>
                    </div>
                </div>
                {showSpan && (
                    <span className="text-base text-gray-700">{content}</span>
                )}
            </div>
            <br/>
        </>
    );
}

export default CollapsibleCard;
