import express from 'express';
import services from '../utils/services.ts'


const router = express.Router();

router.get('/', (_req, res) => {
    const data = services.getDiagnoses()
  res.json(data)
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;