import express, { Request, Response } from "express";
import morgan from "morgan";
import loanRoutes from './api/v1/routes/loanRoutes'; 

const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use('/api/v1/loans', loanRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
