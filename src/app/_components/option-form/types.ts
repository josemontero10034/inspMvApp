export type FormDataStructure = {
  projectName: string;
  levelInspection: string;
  bossName: string;
  bossSign: string | null;
  bossCodia: string;
  bossDate: Date;
  inspector1Name: string ;
  inspector1Sign: string | null;
  inspector1Codia: string;
  inspector1Date: Date;
  inspector2Name: string;
  inspector3Name: string;
  inspector2Sign: string | null;
  inspector2Codia: string;
  inspector2Date: Date;
  inspector3Sign: string | null;
  inspector3Codia: string;
  inspector3Date: Date;
  location: string;
  licenseNumber: string;
  licenseNumberAsked: string;
  secuence: number;
  date: Date;
  evaluationInformationOptions: informationForm[];
  observation: string;
};

export type informationForm = {
  title: string;
  evaluationByCheckbox: {
    question: string;
    isTrue: boolean;
    isFalse: boolean;
  }[];
};
