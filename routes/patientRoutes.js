import express from 'express';
import {
  getAllPatients,
  getSinglePatient,
  createPatient,
  updatePatient,
  deletePatient
} from '../controllers/patientController.js';

const patientRouter = express.Router();

patientRouter.get('/', getAllPatients);
patientRouter.get('/:id', getSinglePatient);
patientRouter.post('/', createPatient);
patientRouter.put('/:id', updatePatient);
patientRouter.delete('/:id', deletePatient);

export default patientRouter;