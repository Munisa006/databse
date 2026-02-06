import express from 'express';
import { initializeDatabase } from './initializeDB.js';
import doctorRouter from './routes/doctorRoutes.js';
import patientRouter from './routes/patientRoutes.js';
import branchRouter from './routes/branchRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';
import treatmentRouter from './routes/treatmentRoutes.js';
import paymentRouter from './routes/paymentRoutes.js';
const app = express();

//Middlewares
app.use(express.json());
//API
app.use('/doctors', doctorRouter);
app.use('/patients', patientRouter);
app.use('/branches', branchRouter);
app.use('/appointments', appointmentRouter);
app.use('/treatments', treatmentRouter);
app.use('/payments', paymentRouter);

// Initialize database on startup
initializeDatabase();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});







