import type { informationForm } from "~/app/_components/option-form/types";

const evaluationInformationOptions: informationForm[] = [
  {
    title: "1. ENCOFRADO DE LOSAS",
    evaluationByCheckbox: [
      {
        question: `1a. Espesor mínimo de plafones de duela (plywood de 3/4")`, isTrue: undefined,
      },
      {
        question: `1b. Separación máxima entre ejes de encostillado en 2"x4", según planos aprobados`, isTrue: undefined
      },
      {
        question: `1c. Separación máxima de puntales usando 2"x4", arriostados en ambas direcciones según planos aprobados`, isTrue: undefined
      },
      {
        question: `1d. Separación máxima de cargaderas 2"x4", según planos aprobados`, isTrue: undefined
      },
      { question: `1e. Dimensiones de las losas, según planos aprobados`, isTrue: undefined }, 
    ],
  },
  {
    title: "2. ARMADURAS DE LOSAS", 
    evaluationByCheckbox: [
      {
        question: `2a. Cantidad, espaciamiento y diámetro del acero de refuerzo en ambas direcciones, de acuerdo a planos aprobados`, isTrue: undefined
      },
      {
        question: `2b.SoIapes, doblez, anclajes y amarres de acero, según planos aprobados`, isTrue: undefined
      },
      {
        question: `2c. Altura del camellado de las losas, según planos aprobados`, isTrue: undefined
      },
      {
        question: `2d. Recubrimiento y calzado de las armaduras, según planos y especificaciones.`, isTrue: undefined
      },
      {
        question: `2e. Colocación de acero de espera, en columnas y muros (bastones), según especificaciones y planos aprobados`, isTrue: undefined
      },
    ],
  },
  {
    title: "3. ENCOFRADO DE ESCALERAS",
    evaluationByCheckbox: [
      {
        question: `3a. Espesor mínimo de plafones de duela (plywood de 3/4"), según planos aprobados`, isTrue: undefined
      },
      {
        question: `3b. Separación máxima entre ejes de encostillado en 2"x4", según planos aprobados`, isTrue: undefined
      },
      {
        question: `3c. Separación máxima de puntales usando 2"x4", arriostrados en ambas direcciones, según planos de encofrado aprobados`, isTrue: undefined
      },
      {
        question: `3d. Dimensiones de las escaleras, según planos aprobados`, isTrue: undefined
      },
    ],
  },
  {
    title: "4. ARMADURAS DE ESCALERAS",
    evaluationByCheckbox: [
      {
        question: `4a. Cantidad, espaciamiento, doblez y diámetros de los aceros en ambas direcciones, de acuerdo a los planos aprobados`, isTrue: undefined
      },
      {
        question: `4b. Solapes, anclajes y amarres del acero, según planos y especificaciones`, isTrue: undefined
      },
      {
        question: `4c. Recubrimiento y calzado de las armaduras, según planos y especificaciones`, isTrue: undefined
      },
    ],
  },
  {
    title: "5. ENCOFRADO DE VIGAS",
    evaluationByCheckbox: [
      {
        question: `5a. Separación máxima en virotes y costillas usando 2"x4", con forro de 1" y plywood de 3/4", en función de espesor de la losa, fondo, altura y peralte de las vigas`, isTrue: undefined
      },
      {
        question: `5b. Dimensiones de los dinteles, según planos aprobados`, isTrue: undefined
      },
    ],
  },
  {
    title: "6. ARMADURAS DE VIGAS",
    evaluationByCheckbox: [
      {
        question: `6a. Cantidad, diámetro y espaciamiento del acero longitudinal, de acuerdo a planos aprobados`, isTrue: undefined
      },
      {
        question: `6b. Cantidad, diámetro, espaciamiento y doblado de estribos, conforme a planos aprobados`, isTrue: undefined
      },
      {
        question: `6c. Solapes, anclajes y amarres de aceros, según planos y especificaciones`, isTrue: undefined
      },
      {
        question: `6d. Recubrimiento y calzado de las armaduras, según planos y especifcaciones`, isTrue: undefined
      },
    ],
  },
  {
    title: "7. ENCOFRADO DE DINTELES",
    evaluationByCheckbox: [
      {
        question: `7a. Separación en virotes y costillas usando 2"x4", con forro de 1" y plywood de 3/4", en función de espesor de la losa, altura y peralte de las vigas`, isTrue: undefined
      },
      {
        question: `7b. Dimensiones de los dinteles, según planos aprobados`, isTrue: undefined
      },
    ],
  },
];

export  default evaluationInformationOptions;