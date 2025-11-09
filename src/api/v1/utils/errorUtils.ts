// src/api/v1/utils/errorUtils.ts

import { AppError } from '../errors/AppErrors';

export const handleError = (err: AppError) => {
  const { message, statusCode } = err;
  return { message, statusCode };
};
