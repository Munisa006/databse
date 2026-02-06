import express from "express";
import { 
    getAllAppointments,
    getSingleAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.get('/', getAllAppointments);
appointmentRouter.get('/:id', getSingleAppointment);
appointmentRouter.post('/', createAppointment);
appointmentRouter.put('/:id', updateAppointment);
appointmentRouter.delete('/:id', deleteAppointment);

export default appointmentRouter;
