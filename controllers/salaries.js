const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getAllSalaries = (req, res) => {
    pool.query("SELECT * FROM salaries LIMIT 50", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getAllSalaries
}