import request from 'supertest';
import app from '../src/app';
import { BadRequestError } from '../src/api/v1/errors/AppErrors';

describe('Error Handling Middleware', () => {
  it('should handle BadRequestError', async () => {
    const response = await request(app)
      .get('/api/v1/loans/invalid-id')  
      .send();

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid loan ID');
  });

  it('should handle internal server error', async () => {
    const response = await request(app)
      .get('/api/v1/loans')
      .send();

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Internal Server Error');
  });
});
