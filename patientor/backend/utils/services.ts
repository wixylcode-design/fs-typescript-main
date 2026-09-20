import diagnosisData from '../data/diagnoses.ts'
import patientData from '../data/patients.ts'
import type { Diagnosis, Patient, SafePatientData } from "../types.ts";
const diagnoses: Diagnosis[] = diagnosisData as Diagnosis[]
const patients:Patient[] = patientData as Patient[]

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses
}
const getPatients = ():SafePatientData[] => {
return patients.map(({id,name,dateOfBirth,gender,occupation}) => ({
id,name,dateOfBirth,gender,occupation

}))
}
export default {
    getDiagnoses,
    getPatients
}