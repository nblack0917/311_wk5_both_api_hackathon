const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const joinWithDepartments = (req, res) => {

    let sql = "SELECT * FROM employees LEFT JOIN departments ON employees.emp_no = departments.dept_no ORDER BY employees.emp_no"
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