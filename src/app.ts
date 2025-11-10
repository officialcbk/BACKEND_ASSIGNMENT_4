import express from 'express';
import morgan from 'morgan';
import loanRoutes from './api/v1/routes/loanRoutes'; 
import { errorHandler } from './api/v1/middleware/errorHandler';
import { loggingMiddleware } from './api/v1/middleware/loggingMiddleware'; 
import logger from './api/v1/utils/logger'; 
import admin from './config/firebase';


const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use('/api/v1/loans', loanRoutes);

app.use(loggingMiddleware);

app.use(errorHandler);


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const db = admin.firestore();  // Access Firestore to log errors

  db.collection('errorLogs').add({
    message: err.message,
    statusCode: 500,
    timestamp: new Date().toISOString(),
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
  }).then(() => {
    logger.error('Error logged to Firestore');
  }).catch((firestoreError) => {
    logger.error('Error logging to Firestore:', firestoreError);
  });

  res.status(500).send('Internal Server Error');
});


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { server };
export default app;  


