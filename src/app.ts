import express from 'express';
import morgan from 'morgan';
import loanRoutes from './api/v1/routes/loanRoutes'; 
import { errorHandler } from './api/v1/middleware/errorHandler';
import { loggingMiddleware } from './api/v1/middleware/loggingMiddleware';

const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use('/api/v1/loans', loanRoutes);

app.use(errorHandler);

app.use(loggingMiddleware);

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err); 
});

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { server };
export default app;  

