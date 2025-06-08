const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
  it('should load the register page', async () => {
    const res = await request(app).get('/register');
    expect(res.statusCode).toBe(200);
  });

  it('should register a user', async () => {
    const res = await request(app).post('/register').send({
      username: 'testuser',
      password: 'testpass'
    });
    expect(res.statusCode).toBe(302); // redirects after registration
  });
});
