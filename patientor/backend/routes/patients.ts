import express from "express";
const router = express.Router();
import services from "../utils/services.ts";
import { validateNewPatientEntry } from "../middleware.ts";
import type { NewPatient } from "../types.ts";

import { v1 as uuid } from "uuid";

router.get("/", (_req, res) => {
  const patients = services.getPatients();
  res.json(patients);
});
router.post("/", validateNewPatientEntry, (_req, res) => {
  const newPatientEntry = res.locals.newPatient as NewPatient;
  const savedPatient = services.savePatient({
    ...newPatientEntry,
    id: uuid(),
  });

  res.json(savedPatient);
});
export default router;
