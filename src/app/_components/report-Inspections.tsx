"use client";
import { Input } from '@mui/material';
import React from 'react';

const ReportInspections: React.FC = () => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Report Inspections</h1>
            <p className="text-lg mb-2">This is the report inspections page.</p>
            <p className="text-lg mb-4">Please take a picture of the inspection.</p>
            <label htmlFor="cameraInput" className="mb-2 text-lg">
                Click the button below to open the camera:
            </label>
            <Input
                type="file"
                inputProps={{
                    accept: "image/*",
                    capture: "user",
                    id: "cameraInput"
                }}
                onChange={handleFileChange}
                className="mb-4"/>
            <Input
                type="file"
                inputProps={{
                    accept: "image/*",
                    capture: "environment",
                    id: "cameraInput"
                }}
                onChange={handleFileChange}
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Generate Report
            </button>
        </div>
    );
};

export default ReportInspections;