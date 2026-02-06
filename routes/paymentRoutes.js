import express from "express";
import { 
    getAllPayments,
    getSinglePayment,
    createPayment,
    updatePayment,
    deletePayment
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.get('/', getAllPayments);
paymentRouter.get('/:id', getSinglePayment);
paymentRouter.post('/', createPayment);
paymentRouter.put('/:id', updatePayment);
paymentRouter.delete('/:id', deletePayment);

export default paymentRouter;
