import React from "react";
import type { FormDataStructure } from "./types";

interface GeneralDataProps {
  value: FormDataStructure;
  onChange: (newValue: FormDataStructure) => void;
}

const GeneralData: React.FC<GeneralDataProps> = ({ value, onChange }) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(event.target.value);
  // };

  return (
    <table className="w-[100%] border-1 border-black">
      <thead>
        <tr>
          <th colSpan={2} className="bg-black text-center text-white">
            DATOS GENERALES
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Nombre del proyecto:{" "}
            <input
              className="w-[90%] border-2 border-black"
              value={value.projectName}
              onChange={(e) => {
                onChange({ ...value, projectName: e.target.value });
              }}
            />
          </td>
          <td>
            Licencia No.{" "}
            <input
              className="w-[90%] border-2 border-black"
              value={value.licenseNumber}
              onChange={(e) => {
                onChange({ ...value, licenseNumber: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            Nivel a inspeccionar{" "}
            <input
              className="w-[90%] border-2 border-black"
              value={value.levelInspection}
              onChange={(e) => {
                onChange({ ...value, levelInspection: e.target.value });
              }}
            />
          </td>
          <td>
            Sol. Licencia No.{" "}
            <input
              className="w-[90%] border-2 border-black"
              value={value.licenseNumberAsked}
              onChange={(e) => {
                onChange({
                  ...value,
                  licenseNumberAsked: e.target.value,
                });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            Encargado de Obra:{" "}
            <input
              className="w-[90%] border-2 border-black"
              value={value.bossName}
              onChange={(e) => {
                onChange({ ...value, bossName: e.target.value });
              }}
            />
          </td>
          <td>
            Fecha:{" "}
            <input
              className="w-[70%] border-2 border-black"
              type="date"
              value={value.date.toISOString().split("T")[0]} // Format date as yyyy-MM-dd
              onChange={(e) => {
                onChange({ ...value, date: new Date(e.target.value) });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            Direccion:{" "}
            <input
              className="w-[100%] border-2 border-black"
              value={value.location}
              onChange={(e) => {
                onChange({ ...value, location: e.target.value });
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralData;
