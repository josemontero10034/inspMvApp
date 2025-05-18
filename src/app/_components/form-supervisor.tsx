"use client";
import React, { useState } from "react";
import GeneralData from "./option-form/general-data";
import StrucutureEvaluation from "./option-form/structure-evaluation";
import ObservationInput from "./option-form/observationInput";
import NameAndSigns from "./option-form/name-and-signs";
import ButtonPrintForm from "./button/button-print-form";
import evaluationInformationOptions from "~/MOCK_DATA/evaluation-data";
import type { FormDataStructure } from "./option-form/types";
import ModalSignature from "./modal-signature";



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
    bossSign: "",
    bossCodia: "",
    bossDate: new Date(),
    inspector1Name: "",
    inspector1Sign: "",
    inspector1Codia: "",
    inspector1Date: new Date(),
    inspector2Sign: "",
    inspector2Codia: "",
    inspector2Date: new Date(),
    inspector3Sign: "",
    inspector3Codia: "",
    inspector3Date: new Date(),
    inspector2Name: "",inspector3Name: "",

  });

    const [open, setOpen] = useState(true);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission logic here, e.g., send data to an API or process it
  };

  return (   <><form
      className="m-auto mr-2 ml-2  w-fit border-2 border-black "
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
          } } />
      </div>
    </form></>
  );
};

export default FormSupervisor;
