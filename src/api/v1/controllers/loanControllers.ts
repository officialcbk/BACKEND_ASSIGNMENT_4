import { Request, Response } from 'express';

export const createLoan = async (req: Request, res: Response) => {
  const loanData = req.body;  
  return res.status(201).json({ message: 'Loan created successfully', loanData });
};

export const getLoan = async (req: Request, res: Response) => {
  const loanId = req.params.id; 
  return res.status(200).json({ message: `Fetching loan with ID ${loanId}`, loanId });
};

export const updateLoan = async (req: Request, res: Response) => {
  const loanId = req.params.id;
  const updateData = req.body;  
  return res.status(200).json({ message: `Loan with ID ${loanId} updated`, updateData });
};

export const deleteLoan = async (req: Request, res: Response) => {
  const loanId = req.params.id;  
  return res.status(200).json({ message: `Loan with ID ${loanId} deleted` });
};
