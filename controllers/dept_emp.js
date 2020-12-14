const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getAllDepartmentEmployees = (req, res) => {
    pool.query("SELECT * FROM dept_emp LIMIT 50", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getAllDepartmentEmployees
}