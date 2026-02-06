import express from "express";
import { 
    getAllTreatments,
    getSingleTreatment,
    createTreatment,
    updateTreatment,
    deleteTreatment
} from "../controllers/treatmentController.js";

const treatmentRouter = express.Router();

treatmentRouter.get('/', getAllTreatments);
treatmentRouter.get('/:id', getSingleTreatment);
treatmentRouter.post('/', createTreatment);
treatmentRouter.put('/:id', updateTreatment);
treatmentRouter.delete('/:id', deleteTreatment);

export default treatmentRouter;
