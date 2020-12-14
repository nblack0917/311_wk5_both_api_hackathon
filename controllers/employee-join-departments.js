const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const joinWithDepartments = (req, res) => {
  console.log("up")
    let sql = "SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no ORDER BY employees.emp_no LIMIT 50"
    console.log(sql)
  
    pool.query(sql, (err, rows) => {
      
      if (err) return handleSQLError(res, err)
      console.log(rows)
      return res.json(rows);
    })
  }

module.exports = {
  joinWithDepartments
}