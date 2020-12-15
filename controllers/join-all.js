const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const joinAll = (req, res) => {
  
    let sql = "SELECT * FROM employees LEFT JOIN titles ON employees.emp_no = titles.emp_no LEFT JOIN salaries ON employees.emp_no = salaries.emp_no LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no ORDER BY employees.emp_no LIMIT 50"
    console.log(sql)
  
    pool.query(sql, (err, rows) => {
      
      if (err) return handleSQLError(res, err)
      console.log(rows)
      return res.json(rows);
    })
  }

module.exports = {
  joinAll
}