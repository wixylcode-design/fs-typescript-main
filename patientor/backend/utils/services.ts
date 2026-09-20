import diagnosisData from '../data/diagnoses.ts'
import type { Diagnosis } from "../types.ts";
const diagnoses: Diagnosis[] = diagnosisData as Diagnosis[]

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses
}
export default {
    getDiagnoses
}