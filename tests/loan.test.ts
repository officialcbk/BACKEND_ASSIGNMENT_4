import request from 'supertest';
import app from '../src/app';

describe('Loan API', () => {
  it('should create a loan', async () => {
    const response = await request(app)
      .post('/api/v1/loans/create')
      .send({ amount: 10000, term: 5 });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Loan created successfully');
  });

  it('should get loan details', async () => {
    const response = await request(app).get('/api/v1/loans/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetching loan with ID 1');
  });

  it('should update loan details', async () => {
    const response = await request(app)
      .put('/api/v1/loans/1')
      .send({ amount: 12000, term: 6 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Loan with ID 1 updated');
  });

  it('should delete a loan', async () => {
    const response = await request(app).delete('/api/v1/loans/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Loan with ID 1 deleted');
  });
});
