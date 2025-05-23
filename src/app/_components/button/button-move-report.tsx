'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface ButtonMoveProps {
label: string;
}

// This component is used to navigate to the report page
// It takes a label as a prop and uses the Next.js router to navigate to the report page when clicked
const ButtonMoveReport: React.FC<ButtonMoveProps> = ({  label }) => {

    const route = useRouter();
    const handleClick = () => {
         route.push('/report');
    };
    return (
        <button type="button" className="h-12 w-[200px] rounded-full bg-gradient-to-r from-red-500 to-red-700 py-2 font-semibold text-white shadow-md transition-all hover:from-red-700 hover:to-red-500" onClick={handleClick}>
        {label}
      </button>
    );
};

export default ButtonMoveReport;