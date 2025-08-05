"use client";
import React, { useState } from 'react';

interface DatePickerProps {
    value?: string;
    onChange?: (date: string) => void;
    label?: string;
    min?: string;
    max?: string;
    disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    label,
    min,
    max,
    disabled,
}) => {
    const [selectedDate, setSelectedDate] = useState(value ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
         onChange?.(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {label && (
                <label style={{ marginBottom: 4 }}>
                    {label}
                </label>
            )}
            <input
                type="date"
                value={selectedDate}
                onChange={handleChange}
                min={min}
                max={max}
                disabled={disabled}
                style={{
                    padding: '6px 10px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    fontSize: 16,
                }}
            />
        </div>
    );
};

export default DatePicker;