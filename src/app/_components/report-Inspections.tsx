"use client";
import { Input } from '@mui/material';
import React from 'react';

const ReportInspections: React.FC = () => {

    const [photos, setPhotos] = React.useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
            setPhotos((prevPhotos) => [...prevPhotos, file]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Report Inspections</h1>
            <p className="text-lg mb-2">This is the report inspections page.</p>
            {photos.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Selected Photos:</h2>
                    <ul className="list-disc list-inside">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(photo)}
                                alt={`Selected photo ${index + 1}`}
                                className="w-32 h-32 object-cover mb-2"
                            />
                        ))}
                    </ul>
                </div>
            )}
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