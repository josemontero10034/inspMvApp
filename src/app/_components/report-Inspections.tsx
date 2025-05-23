"use client";
import { IconButton, Input } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CommonModal from "./common-modal";
import ButtonOnSave from "./button/button-save";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

type BasicPhotoData = { file: File; description: string; id?: string };

// This component is used to report inspections and handle photo uploads
// It allows users to take photos using their device's camera and add descriptions to the photos

const ReportInspections: React.FC = () => {
  const [photos, setPhotos] = useState<BasicPhotoData[]>([]);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState<string>("");

  // This effect is used to open the modal when photos are added
  // It checks if the modal is not open and if there are photos in the state
  useEffect(() => {
    if (!open && photos.length > 0) {
      setOpen(true);
    }
  }, [photos]);
  // This function is used to open the modal

  // This function is used to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // This function is used to handle file input changes
  // It adds the selected file to the photos state
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      setPhotos((prevPhotos) => [...prevPhotos, { file, description: "" }]);
    }
  };

  const handleDescriptionChange = useCallback(() => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];

      const LastUploadedPhoto = updatedPhotos[updatedPhotos.length - 1];
      if (LastUploadedPhoto) {
        LastUploadedPhoto.description = description;
        prevPhotos[updatedPhotos.length - 1] = LastUploadedPhoto;
        return prevPhotos;
      } else {
        console.error("No photo found to update description.");
        // If no photo is found, return the original array
        return prevPhotos;
      }
    });
  }, [description]);

  // This function is used to handle the description change
  // It updates the description of the last uploaded photo
  const handleOnSave = () => {
    handleDescriptionChange();
    setOpen(false);
  };
  // This function is used to handle the description change
  // Custom styles for image and input
  const imageStyle: React.CSSProperties = {
    boxShadow: "0 4px 16px 0 rgba(30, 64, 175, 0.3)", // blue shadow
    borderRadius: "12px",
    border: "2px solid #2563eb", // blue-600
  };

  const inputStyle: React.CSSProperties = {
    borderRadius: "8px",
    border: "2px solid #2563eb",
    padding: "8px",
    outline: "none",
  };

  return (
    <>
      <div className="mt-2 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-4 flex text-2xl font-bold">Reporte de inspeccion</h1>
        <p className="flex flex-col justify-items-center text-center text-lg">
          Esta es la pagina para realizar las inspecciones en campo
        </p>
        {photos.length > 0 && (
          <div className="mb-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold">Seleccionar las fotos:</h2>
            <ul className="w-[50%] list-inside list-disc gap-3.5 scroll-auto">
              {photos.length > 0 && (
                <label className="grid justify-items-center text-center text-sm">
                  Total de imagenes seleccionadas: {photos.length}
                </label>
              )}
              {photos.map((photo, index) => (
                <div key={index} className="pt-2.5">
                  <img
                    style={imageStyle}
                    src={URL.createObjectURL(photo.file)}
                    alt={`Selected photo ${index + 1}`}
                    className="mb-2 h-[100%] w-[100%] object-cover"
                  />
                  <div className="grid justify-items-center text-center">
                    <label className="text-sm">
                      <span className="font-extrabold text-blue-700">{`Imagen ${index + 1}`}</span>{" "}
                      {` :` + photo.description}
                    </label>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
        {/* <label htmlFor="cameraInput" className="mb-2 text-lg">
                Click the button below to open the camera:
            </label> */}
        <label>
          <IconButton component="span">
            <CameraAltIcon className="text-blue-500" />
            <span className="text-sm text-blue-500">Tomar foto</span>
          </IconButton>
          <input
            type="file"
            accept="image/*"
            capture="user"
            id="cameraInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>

        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Generate Report
        </button>
      </div>
      <CommonModal
        open={open}
        onClose={handleClose}
        title={"Describir Imagen"}
        content={
          <input
            style={inputStyle}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        }
        actions={<ButtonOnSave label={"Guardar"} handleClick={handleOnSave} />}
      />
    </>
  );
};

export default ReportInspections;
