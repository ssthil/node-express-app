import request from 'supertest';
import { app } from '../index'; // Adjust the import to the actual file location

describe('Express App Endpoints', () => {
  it('should return a greeting message from the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

  it('should return employees data from /api/employees', async () => {
    const response = await request(app).get('/api/employees');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: 'Alice', department: 'Engineering' },
      { id: 2, name: 'Bob', department: 'Sales' },
    ]);
  });

  it('should return employers data from /api/employers', async () => {
    const response = await request(app).get('/api/employers');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: 'Acme Corp' },
      { id: 2, name: 'Globex Inc' },
    ]);
  });

  it('should return personal info data from /api/personalInfo', async () => {
    const response = await request(app).get('/api/personalInfo');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'John Doe',
      address: '123 Main St',
    });
  });

  it('should handle a custom NAME environment variable in the greeting', async () => {
    process.env.NAME = 'TestUser';
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello TestUser!');
    delete process.env.NAME; // Clean up
  });
});
