const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Load data
const getEmployees = () => {
  const data = fs.readFileSync('./db.json', 'utf-8');
  const json = JSON.parse(data);
  return json.employees || [];
};

// Case-insensitive search helper
const includesIgnoreCase = (value, searchTerm) => {
   
  return value?.toLowerCase().includes(searchTerm?.toLowerCase()) ;
};

// Search API
app.get('/employees', (req, res) => {
  const { firstName, lastName, position } = req.query;

  let employees = getEmployees();

  if (firstName) {
    employees = employees.filter(emp =>
      includesIgnoreCase(emp.firstName, firstName)
    );
  }

  if (lastName) {
    employees = employees.filter(emp =>
      includesIgnoreCase(emp.lastName, lastName)
    );
  }

  if (position) {
    employees = employees.filter(emp =>
      includesIgnoreCase(emp.position, position)
    );
  }

  console.log("Filtered employees:", employees);
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
