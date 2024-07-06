import React, { useRef } from 'react';
import { useState } from 'react';

const Test = () => {
    const inputRefs = useRef([]);
    const [code, setCode] = useState('');

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        alert(paste)

        if (paste.length === 6 && !isNaN(paste)) {
            paste.split('').forEach((char, index) => {
                inputRefs.current[index].value = char;
            });
            inputRefs.current[5].focus();
            e.preventDefault();
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value.slice(0, 1);
        if (!isNaN(value) && value !== '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);


            if (e.target.value !== '' && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className=' h-screen w-full flex justify-center items-center'>

            <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md max-w-sm border-2 border-blue-200 mx-auto">
                <img src="/3.jpg" alt="Logo" className=" h-12 mb-6" />
                <div className="text-lg font-semibold mb-3">Enter Authentication App Code</div>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    Your six-digit code can be found in your primary authentication app.
                </p>
                <div className="flex space-x-2 mb-6">
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            onChange={(e) => handleChange(e, index)}
                            onPaste={handlePaste}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="w-10 h-10 border border-gray-300 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    ))}
                </div>
                <button
                    className="bg-primary text-white px-4 py-2 rounded mb-4 w-full disabled:opacity-50"
                    onClick={() => alert('Code Confirmed')}
                >
                    Confirm
                </button>
                <div className="flex justify-between w-full text-primary">
                    <a href="#" className="hover:underline">Back</a>
                </div>
            </div>
        </div>
    );
};

export default Test;
