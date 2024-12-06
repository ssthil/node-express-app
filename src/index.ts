import express from 'express';
export const app = express();

// Mock data
const employees = [
  { id: 1, name: 'Alice', department: 'Engineering' },
  { id: 2, name: 'Bob', department: 'Sales' },
];

const employers = [
  { id: 1, name: 'Acme Corp' },
  { id: 2, name: 'Globex Inc' },
];

const personalInfo = {
  name: 'John Doe',
  address: '123 Main St',
};

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

// API endpoints
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.get('/api/employers', (req, res) => {
  res.json(employers);
});

app.get('/api/personalInfo', (req, res) => {
  res.json(personalInfo);
});

// Only start the server if this file is run directly
if (require.main === module) {
  const port = parseInt(process.env.PORT || '3001');
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}