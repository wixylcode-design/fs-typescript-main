import type { RequestHandler } from "express";
import { z } from "zod";
import { newEntrySchema } from "./utils/services.ts";

export const validateNewPatientEntry: RequestHandler = (req, res, next) => {
  const result = newEntrySchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).send({ error: result.error.issues });
    return;
  }

  res.locals.newPatient = result.data;
  next();
};

export const isZodError = (error: unknown): error is z.ZodError => {
  return error instanceof z.ZodError;
};
