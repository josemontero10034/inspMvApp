import React from 'react';

interface ButtonPrintFormProps {
    onClick: () => void;
    label?: string;
}

// This component is used to print a form
// It takes an onClick function as a prop and an optional label
const ButtonPrintForm: React.FC<ButtonPrintFormProps> = ({ onClick, label = 'Imprimir' }) => {
    return (
        <button onClick={onClick} type='submit' className="px-6 py-3 text-white bg-black border-2 border-white rounded-lg shadow-lg hover:bg-gray-800 hover:border-gray-600 transition duration-300 ">
            {label}
        </button>
    );
};

export default ButtonPrintForm;

