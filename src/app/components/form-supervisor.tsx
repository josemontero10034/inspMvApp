"use client";
import React, { useState } from "react";
import GeneralData from "./option-form/general-data";
import StrucutureEvaluation from "./option-form/structure-evaluation";
import ObservationInput from "./option-form/observationInput";
import NameAndSigns from "./option-form/name-and-signs";
import ButtonPrintForm from "./button/button-print-form";
import evaluationInformationOptions from "~/MOCK_DATA/evaluation-data";
import type { FormDataStructure } from "./option-form/types";
import createDocument from "~/server/pdocx";


const FormSupervisor: React.FC = () => {
  const [formData, setFormData] = useState<FormDataStructure>({
    projectName: "",
    levelInspection: "",
    bossName: "",
    location: "",
    licenseNumber: "",
    licenseNumberAsked: "",
    secuence: 0,
    date: new Date(),
    evaluationInformationOptions,
    observation: "",
    bossSign: null,
    bossCodia: "",
    bossDate: new Date(),
    inspector1Name: "",
    inspector1Sign: null,
    inspector1Codia: "",
    inspector1Date: new Date(),
    inspector2Sign: null,
    inspector2Codia: "",
    inspector2Date: new Date(),
    inspector3Sign: null,
    inspector3Codia: "",
    inspector3Date: new Date(),
    inspector2Name: "",
    inspector3Name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission logic here, e.g., send data to an API or process it
createDocument(formData);

  };

  return (
    <>
      <form
        className="m-auto mr-2 ml-2 w-fit border-2 border-black"
        onSubmit={handleSubmit}
      >
        <GeneralData onChange={setFormData} value={formData} />
        <StrucutureEvaluation value={formData} onChange={setFormData} />
        <ObservationInput value={formData} onChange={setFormData} />
        <NameAndSigns value={formData} onChange={setFormData} />
        <div className="flex items-center justify-center">
          <ButtonPrintForm
            onClick={() => {
              console.log("Print form clicked");
              // Implement print functionality here
            }}
          />
        </div>
        <a href="/form-supervisor.docx" download="form-supervisor.docx">
    Descargar documento
</a>
      </form>
    </>
  );
};

export default FormSupervisor;
