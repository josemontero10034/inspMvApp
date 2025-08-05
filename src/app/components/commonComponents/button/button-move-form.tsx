'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface ButtonMoveProps {
label: string;
}
// This component is used to navigate to the form page
// It takes a label as a prop and uses the Next.js router to navigate to the form page when clicked

const ButtonMoveForm: React.FC<ButtonMoveProps> = ({  label }) => {

    const route = useRouter();
    const handleClick = () => {
         route.push('/form');
    };
    return (
        <button type="button" className="h-12 w-[200px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700 py-2 font-semibold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-500" onClick={handleClick}>
        {label}
      </button>
    );
};

export default ButtonMoveForm;