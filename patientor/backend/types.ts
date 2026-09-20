export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type NewPatient = Omit<Patient, 'id'>
export type SafePatientData  = Omit< Patient, 'ssn'>

export const GenderValues = {
  male:"male",
  female:"female",
} as const;

export type Gender = typeof GenderValues[keyof typeof GenderValues];