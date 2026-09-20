import diagnosisData from "../data/diagnoses.ts";
import patientData from "../data/patients.ts";
import {z} from 'zod'
import {
  type Diagnosis,
  type Patient,
  type SafePatientData,
  type NewPatient,
  GenderValues,
} from "../types.ts";
const diagnoses: Diagnosis[] = diagnosisData as Diagnosis[];
const patients: Patient[] = patientData as Patient[];

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};
const getPatients = (): SafePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

/*const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
/*const parseText = (text: unknown, name: string): string => {
  if (!text || !isString(text)) {
    throw new Error(`Incorrect or missing ${name}`);
  }
  return text;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
/*
const isGender = (param: string): param is Gender => {
  return (Object.values(GenderValues) as string[]).includes(param);
};
/*const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }

  return gender;
};\
*/
/*const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};
*/
 export const newEntrySchema =z.object( {
      name: z.string(),
      dateOfBirth: z.iso.date(),
      gender: z.enum(GenderValues),
      ssn: z.string(),
      occupation: z.string(),
    });
const parseNewPatientEntry = (object: unknown): NewPatient => {

  return newEntrySchema.parse(object)
};
const savePatient = (patient: Patient): Patient => {
  patients.concat(patient);
  return patient;
};

export default {
  getDiagnoses,
  getPatients,
  parseNewPatientEntry,
  savePatient,
};
