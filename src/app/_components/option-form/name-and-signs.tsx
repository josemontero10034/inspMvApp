import React from "react";
import type { StructureEvaluationProps } from "./structure-evaluation";

const NameAndSigns: React.FC<StructureEvaluationProps> = ({
  value,
  onChange,
}) => {
  const {
    bossCodia,
    bossDate,
    bossName,
    bossSign,
    inspector1Codia,
    inspector1Date,
    inspector1Sign,
    inspector2Codia,
    inspector2Date,
    inspector2Sign,
    inspector3Codia,
    inspector3Date,
    inspector3Sign,
    inspector3Name,
    inspector1Name,
    inspector2Name,
  } = value;

  
  return (
    <table className="w-full border-1 border-black">
      <thead>
        <tr>
          <th colSpan={5} className="bg-black text-center text-white">
            {"5. NOMBRE Y FIRMA DEL SUPERVISOR"}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{"  "}</td>
          <td>Nombre(s) y Apellidos(s)</td>
          <td>Firma</td>
          <td>Codia</td>
          <td>Fecha</td>
        </tr>
        <tr>
          <td className="border-2 border-black">
            {"Director o encargado de obra"}
          </td>
          <td>
            <input
              id="bossName"
              className="w-[90%] border-2 border-black"
              type="text"
              value={bossName}
              onChange={(e) => {
                onChange({
                  ...value,
                  bossName: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="bossSign"
              className="w-[90%] border-2 border-black"
              type="text"
              value={bossSign}
              onChange={(e) => {
                onChange({
                  ...value,
                  bossSign: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="bossCodia"
              className="w-[90%] border-2 border-black"
              type="text"
              value={bossCodia}
              onChange={(e) => {
                onChange({
                  ...value,
                  bossCodia: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="bossDate"
              className="w-[90%] border-2 border-black"
              type="date"
              value={bossDate.toISOString().split("T")[0]}
              onChange={(e) => {
                onChange({
                  ...value,
                  bossDate: new Date(e.target.value),
                });
              }}
            />
          </td>
        </tr>
        <tr>
          <td rowSpan={3} className="border-2 border-black">
            {"Inspectores"}
          </td>
          <td>
            <input
              id="inspector1Name"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector1Name}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector1Name: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector1Sign"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector1Sign}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector1Sign: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector1Codia"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector1Codia}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector1Codia: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector1Date"
              className="w-[90%] border-2 border-black"
              type="date"
              value={inspector1Date.toISOString().split("T")[0]}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector1Date: new Date(e.target.value),
                });
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              id="inspector2Name"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector2Name}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector2Name: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector2Sign"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector2Sign}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector2Sign: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector2Codia"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector2Codia}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector2Codia: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector3Date"
              className="w-[90%] border-2 border-black"
              type="date"
              value={inspector2Date.toISOString().split("T")[0]}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector2Date: new Date(e.target.value),
                });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              id="inspector3Name"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector3Name}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector3Name: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector3Sign"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector3Sign}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector3Sign: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector3Codia"
              className="w-[90%] border-2 border-black"
              type="text"
              value={inspector3Codia}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector3Codia: e.target.value,
                });
              }}
            />
          </td>
          <td>
            <input
              id="inspector3Date"
              className="w-[90%] border-2 border-black"
              type="date"
              value={inspector3Date.toISOString().split("T")[0]}
              onChange={(e) => {
                onChange({
                  ...value,
                  inspector3Date: new Date(e.target.value),
                });
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NameAndSigns;
