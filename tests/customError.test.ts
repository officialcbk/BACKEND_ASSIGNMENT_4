import { BadRequestError } from '../src/api/v1/errors/AppErrors';

describe('Custom Error Classes', () => {
  it('should create a BadRequestError with correct status code and message', () => {
    const error = new BadRequestError('Invalid data provided');
    expect(error.statusCode).toBe(400);
    expect(error.message).toBe('Invalid data provided');
  });
});
