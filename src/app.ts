import express from 'express';
import morgan from 'morgan';
import loanRoutes from './api/v1/routes/loanRoutes'; 
import { errorHandler } from './api/v1/middleware/errorHandler';


const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use('/api/v1/loans', loanRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { server };
export default app;  
