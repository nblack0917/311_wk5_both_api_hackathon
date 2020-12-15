const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const joinAll = (req, res) => {
  
    let sql = `SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name, salaries.salary FROM employees LEFT JOIN titles ON employees.emp_no = titles.emp_no LEFT JOIN salaries ON employees.emp_no = salaries.emp_no LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE salaries.to_date LIKE "9999%" ORDER BY employees.emp_no LIMIT 50`
    console.log(sql)
  
    pool.query(sql, (err, rows) => {
      
      if (err) return handleSQLError(res, err)
      console.log(rows)
      return res.json(rows);
    })
  }

  const salaryById = (req, res) => {
    let sql = `SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name, salaries.salary FROM employees LEFT JOIN titles ON employees.emp_no = titles.emp_no LEFT JOIN salaries ON employees.emp_no = salaries.emp_no LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE employees.emp_no = ${req.params.emp_no} AND salaries.to_date LIKE "9999%"`  

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const salaryByName = (req, res) => {    
    let sql = `SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name, salaries.salary FROM employees LEFT JOIN titles ON employees.emp_no = titles.emp_no LEFT JOIN salaries ON employees.emp_no = salaries.emp_no LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE employees.first_name = "${req.params.first_name}" AND salaries.to_date LIKE "9999%"`  

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

module.exports = {
  joinAll,
  salaryById,
  salaryByName
}