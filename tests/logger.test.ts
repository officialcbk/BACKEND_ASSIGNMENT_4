import request from 'supertest';
import app from '../src/app';
import logger from '../src/api/v1/utils/logger';

jest.mock('../src/utils/logger'); 

describe('Logging Middleware', () => {
  it('should log HTTP requests', async () => {
    await request(app).get('/');  

    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('GET /'));
  });

  it('should log errors correctly', async () => {
    await request(app).get('/error');  

    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining('Something went wrong!'));
  });
});
