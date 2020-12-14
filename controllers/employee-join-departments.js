const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const joinWithDepartments = (req, res) => {
    let sql = "SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no ORDER BY employees.emp_no LIMIT 50"

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const departmentById = (req, res) => {
    let sql = `SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE employees.emp_no = ${req.params.emp_no}`  

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const departmentByName = (req, res) => {
    let sql = `SELECT employees.emp_no, employees.first_name, employees.last_name, departments.dept_name FROM employees LEFT JOIN dept_emp ON employees.emp_no = dept_emp.emp_no LEFT JOIN departments ON dept_emp.dept_no = departments.dept_no WHERE employees.first_name = "${req.params.first_name}"`  

    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

module.exports = {
  joinWithDepartments,
  departmentById,
  departmentByName
}