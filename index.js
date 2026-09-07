import express from 'express';
import net from 'node:net';
import doctorRouter from './routes/doctorRoutes.js';
import patientRouter from './routes/patientRoutes.js';
import branchRouter from './routes/branchRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';
import treatmentRouter from './routes/treatmentRoutes.js';
import paymentRouter from './routes/paymentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const getAvailablePort = (port) => {
  return new Promise((resolve, reject) => {
    const tester = net.createServer();

    tester.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve(getAvailablePort(port + 1));
        return;
      }

      reject(error);
    });

    tester.once('listening', () => {
      const { port: availablePort } = tester.address();
      tester.close(() => resolve(availablePort));
    });

    tester.listen(port);
  });
};

//Middlewares
app.use(express.json());

//Root
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Clinic API is running',
    endpoints: ['/doctors', '/patients', '/branches', '/appointments', '/treatments', '/payments']
  });
});

//API
app.use('/doctors', doctorRouter);
app.use('/patients', patientRouter);
app.use('/branches', branchRouter);
app.use('/appointments', appointmentRouter);
app.use('/treatments', treatmentRouter);
app.use('/payments', paymentRouter);

const startServer = async () => {
  const availablePort = await getAvailablePort(PORT);

  app.listen(availablePort, () => {
    console.log(`Server is running on port ${availablePort}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});







