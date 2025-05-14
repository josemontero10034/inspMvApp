export type FormDataStructure = {
  projectName: string;
  levelInspection: string;
  bossName: string;
  location: string;
  licenseNumber: string;
  licenseNumberAsked: string;
  secuence: number;
  date: Date;
  evaluationInformationOptions: informationForm[];
};

export type informationForm = {
  title: string;
  evaluationByCheckbox: {
    question: string;
    isTrue: boolean;
    isFalse: boolean;
  }[];
};
