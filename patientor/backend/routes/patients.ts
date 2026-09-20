import express from 'express'
const router = express.Router()
import services from '../utils/services.ts'

router.get('/', (_req,res)=>{
    const patients = services.getPatients()
    res.json(patients)
})
export default router