import express from 'express'
const router = express.Router()
import services from '../utils/services.ts'

import { v1 as uuid } from 'uuid'

router.get('/', (_req,res)=>{
    const patients = services.getPatients()
    res.json(patients)
})
router.post('/', (req,res) => {
    const body = req.body;
    
    const newPatientEntry = services.parseNewPatientEntry(body)
    const savedPatient = services.savePatient({...newPatientEntry, id:uuid()})

    res.json(savedPatient)

})
export default router