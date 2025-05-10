import React from "react";

type GeneralData = {
  projectName: string;
  levelInspection: string;
  bossName: string;
  location: string;
  licenseNumber: number;
  licenseNumberAsked: number;
  secuence: number;
};
interface GeneralDataProps {
  value: GeneralData;
  onChange: (newValue: GeneralData) => void;
}

const GeneralData: React.FC<GeneralDataProps> = ({
  value: {
    bossName,
    levelInspection,
    licenseNumber,
    location,
    licenseNumberAsked,
    projectName,
    secuence,
  },
  onChange,
}) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(event.target.value);
  // };

  return (
    <div className="">
      <table className="w-full border-1 border-black">
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
              <input className="w-fit border-2 border-black" />
            </td>
            <td>
              Licencia No. <input className="w-fit border-2 border-black" />
            </td>
          </tr>
          <tr>
            <td>
              Nivel a inspeccionar{" "}
              <input className="w-fit border-2 border-black" />
            </td>
            <td>
              Sol. Licencia No.{" "}
              <input className="w-fit border-2 border-black" />
            </td>
          </tr>
          <tr>
            <td>
              Encargado de Obra:{" "}
              <input className="w-fit border-2 border-black" />
            </td>
            <td>
              Fecha: <input className="w-fit border-2 border-black" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Direccion: <input className="w-[90%] border-2 border-black" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GeneralData;
