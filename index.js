const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require('./routes/employees');

const employeeJoinDepartmentsRouter = require('./routes/employee-join-departments.js');
// // =======
// const salariesRouter = require('./routes/salaries');
// const departmentsRouter = require('./routes/departments');


const app = express();

app.use(bodyParser.json())
app.use('/employees', employeesRouter)
app.use('/employee-join-departments', employeeJoinDepartmentsRouter)

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});