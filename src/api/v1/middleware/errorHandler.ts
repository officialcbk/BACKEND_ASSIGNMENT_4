import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppErrors';

export const errorHandler = (
  err: AppError, req: Request, res: Response, next: NextFunction
) => {
  const { message, statusCode } = err;
  const errorResponse = {
    message,
    statusCode,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.error(err); 
  }

if (process.env.NODE_ENV === 'production') {

  console.error('An error occurred:', err.message);
} else {
  console.error(err);
}


  res.status(statusCode || 500).json(errorResponse);
};

  