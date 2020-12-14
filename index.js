const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require('./routes/employees');
const departmentsRouter = require('./routes/departments');
const employeeJoinDepartmentsRouter = require('./routes/employee-join-departments.js');

const salariesRouter = require('./routes/salaries');
const departmentEmployeesRouter = require('./routes/dept_emp')
<<<<<<< HEAD

=======
const departmentManagersRouter = require('./routes/dept_manager')
const titlesRouter = require('./routes/titles')
// =======
>>>>>>> c3713608b9220190fb67ce9af4321ecf1dc14d50


const app = express();

app.use(bodyParser.json())
app.use('/employees', employeesRouter)
app.use('/employee-departments', employeeJoinDepartmentsRouter)
app.use('/departments', departmentsRouter)
app.use('/salaries', salariesRouter)
app.use('/dept_emp', departmentEmployeesRouter)
app.use('/dept_manager', departmentManagersRouter)
app.use('/titles', titlesRouter)

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});