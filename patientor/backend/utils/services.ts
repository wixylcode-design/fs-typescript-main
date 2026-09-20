import diagnosisData from "../data/diagnoses.ts";
import patientData from "../data/patients.ts";
import type {
  Diagnosis,
  Patient,
  SafePatientData,
  NewPatient,
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

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
const parseText = (text: unknown, name: string): string => {
  if (!text || !isString(text)) {
    throw new Error(`Incorrect or missing ${name}`);
  }
  return text;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};
const parseNewPatientEntry = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "gender" in object &&
    "occupation" in object &&
    "ssn" in object
  ) {
    const newEntry: NewPatient = {
      name: parseText(object.name, "name"),
      dateOfBirth: parseDate(object.dateOfBirth),
      gender: parseText(object.gender, `gender`),
      ssn: parseText(object.ssn, "name"),
      occupation: parseText(object.occupation, "name"),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};
const savePatient = (patient:Patient):Patient => {
patients.concat(patient)
return patient
}

export default {
  getDiagnoses,
  getPatients,
  parseNewPatientEntry,
  savePatient
};
