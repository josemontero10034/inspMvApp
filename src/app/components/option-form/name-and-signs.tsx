import React, { use, useEffect, useState } from "react";
import type { StructureEvaluationProps } from "./structure-evaluation";
import ModalSignature from "../modal-signature";
import { Button } from "@mui/material";
import Image from "next/image";

enum InspectosType {
  INSPECTOR1 = "inspector1",
  INSPECTOR2 = "inspector2",
  INSPECTOR3 = "inspector3",
  BOSS = "boss",
}

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
  const [open, setOpen] = useState(false);
  const [inspectorType, setInspectorType] = useState<InspectosType>(
    InspectosType.BOSS,
  );
  const [signature, setSignature] = useState<string | null>(null);

  // useEffect(() => {
  //   console.log(open);
  // }, [open]);

  return (
    <>
      <ModalSignature
      signature={signature}
      setSignature={setSignature}
      isOpen={open}
      onClose={() => {
        setOpen(false);
        console.log("cerrar");
        console.log(open);
      }}
      onSave={(url) => {
        if (inspectorType === InspectosType.BOSS) {
        onChange({
          ...value,
          bossSign: url,
        });
        } else if (inspectorType === InspectosType.INSPECTOR1) {
        onChange({
          ...value,
          inspector1Sign: url,
        });
        } else if (inspectorType === InspectosType.INSPECTOR2) {
        onChange({
          ...value,
          inspector2Sign: url,
        });
        } else if (inspectorType === InspectosType.INSPECTOR3) {
        onChange({
          ...value,
          inspector3Sign: url,
        });
        }
        console.log(inspectorType);
        setOpen(false);
      }}
      />
      <table className="w-[100%] table-fixed border-1 border-black">
      <thead>
        <tr>
        <th colSpan={5} className="bg-black text-center text-white">
          {"5. NOMBRE Y FIRMA DEL SUPERVISOR"}
        </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="border-2 border-black text-center"></td>
        <td className="border-2 border-black text-center">
          Nombres y Apellidos
        </td>
        <td className="border-2 border-black text-center">Firma</td>
        <td className="border-2 border-black text-center">Codia</td>
        <td className="border-2 border-black text-center">Fecha</td>
        </tr>
        <tr>
        <td className="border-2 border-black w-full text-center break-words">
          {"Director o encargado de obra"}
        </td>
        <td className="border-2 border-black">
          <input
          id="bossName"
          className="relative h-auto w-full"
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
        <td className="border-2 border-black">
          {bossSign ? (
          <Image
            src={bossSign}
            className="h-full w-full cursor-pointer"
            width={100}
            height={50}
            alt="Firma del director o encargado de obra"
            onClick={() => {
            setSignature(bossSign);
            setInspectorType(InspectosType.BOSS);
            setOpen(true);
            }}
          />
          ) : (
          <Button
            variant="outlined"
            onClick={() => {
            setInspectorType(InspectosType.BOSS);
            setOpen(true);
            }}
            className="w-full text-center capitalize"
          >
            Firma
          </Button>
          )}
        </td>
        <td className="border-2 border-black">
          <input
          id="bossCodia"
          className="w-full"
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
        <td className="border-2 border-black">
          <input
          id="bossDate"
          className="w-full rounded border border-black"
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
        <td
          rowSpan={3}
          className="border-2 border-black text-center break-words"
        >
          {"Inspectores"}
        </td>
        <td className="border-2 border-black">
          <input
          id="inspector1Name"
          className="w-full"
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
        <td className="border-2 border-black">
          {inspector1Sign ? (
          <img
            src={inspector1Sign}
            alt="Firma del inspector 1"
            onClick={() => {
            setSignature(inspector1Sign);
            setInspectorType(InspectosType.INSPECTOR1);
            setOpen(true);
            }}
          />
          ) : (
          <Button
            id="inspector1Sign"
            variant="outlined"
            onClick={() => {
            setInspectorType(InspectosType.INSPECTOR1);
            setOpen(true);
            }}
            className="w-full text-center capitalize"
          >
            Firma
          </Button>
          )}
        </td>
        <td className="border-2 border-black">
          <input
          id="inspector1Codia"
          className="w-full"
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
        <td className="border-2 border-black">
          <input
          id="inspector1Date"
          className="w-full rounded border border-black"
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
        <td className="border-2 border-black">
          <input
          id="inspector2Name"
          className="w-full"
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
        <td className="border-2 border-black">
          {inspector2Sign ? (
          <img
            src={inspector2Sign}
            alt="Firma del inspector 2"
            onClick={() => {
            setSignature(inspector2Sign);
            setInspectorType(InspectosType.INSPECTOR2);
            setOpen(true);
            }}
          />
          ) : (
          <Button
            id="inspector2Sign"
            variant="outlined"
            onClick={() => {
            setInspectorType(InspectosType.INSPECTOR2);
            setOpen(true);
            }}
            className="w-full text-center capitalize"
          >
            Firma
          </Button>
          )}
        </td>
        <td className="border-2 border-black">
          <input
          id="inspector2Codia"
          className="w-full"
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
        <td className="border-2 border-black">
          <input
          id="inspector2Date"
          className="w-full rounded border border-black"
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
        <td className="border-2 border-black">
          <input
          id="inspector3Name"
          className="w-full"
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
        <td className="border-2 border-black">
          {inspector3Sign ? (
          <img
            src={inspector3Sign}
            alt="Firma del inspector 3"
            onClick={() => {
            setSignature(inspector3Sign);
            setInspectorType(InspectosType.INSPECTOR3);
            setOpen(true);
            }}
          />
          ) : (
          <Button
            id="inspector3Sign"
            variant="outlined"
            onClick={() => {
            setInspectorType(InspectosType.INSPECTOR3);
            setOpen(true);
            }}
            className="w-full text-center capitalize"
          >
            Firma
          </Button>
          )}
        </td>
        <td className="border-2 border-black">
          <input
          id="inspector3Codia"
          className="w-full"
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
        <td className="border-2 border-black">
          <div>
          <input
            id="inspector3Date"
            className="w-full rounded border border-black"
            type="date"
            value={inspector3Date.toISOString().split("T")[0]}
            onChange={(e) => {
            onChange({
              ...value,
              inspector3Date: new Date(e.target.value),
            });
            }}
          />
          </div>
        </td>
        </tr>
      </tbody>
      </table>
    </>
  );
};

export default NameAndSigns;
