import request from 'supertest';
import app from '../app.js';

describe('GET /api/weather', () => {
  it('should return 400 without city param', async () => {
    const res = await request(app).get('/api/weather');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('City parameter is required.');
  });
});