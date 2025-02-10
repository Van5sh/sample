import React from 'react';

interface ButtonProps {
    text: string;
}

export default function CustomButton({ text }: ButtonProps) {
    return (
        <button className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition duration-200">
            {text}
        </button>
    );
}
