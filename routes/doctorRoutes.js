import express from "express";
import { 
    getAllDoctors, 
    getSingleDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
} from "../controllers/doctorController.js";
const doctorRouter = express.Router();

doctorRouter.get('/', getAllDoctors);
doctorRouter.get('/:id', getSingleDoctor);
doctorRouter.post('/', createDoctor);
doctorRouter.put('/:id', updateDoctor);
doctorRouter.delete('/:id', deleteDoctor);

export default doctorRouter;