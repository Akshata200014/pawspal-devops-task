const request = require('supertest');
const app = require('./app');

describe('PawsPalConnect UI Tests', () => {
  test('It should load the homepage successfully', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('PawsPalConnect');
  });

  test('Health check should return OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });
});