import  express  from "express";
import cors from 'cors'

import diagnosisRouter from './routes/diagnoses.ts'
//import type { Diagnosis } from "./types.ts";


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/diagnoses', diagnosisRouter)

app.get("/api/ping", (_req,res) => {

res.send("Hello from server")

})



const PORT  = 3001
app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`)
})
