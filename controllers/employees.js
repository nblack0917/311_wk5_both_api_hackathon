const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const getAllEmployees = (req, res) => {
    pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeeById = (req, res) => {
    let sql = `SELECT ?? FROM ?? WHERE ?? = ?`
    sql = mysql.format(sql, ['*', 'employees', 'emp_no', req.params.emp_no])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeeByFirstName = (req, res) => {
    let sql = `SELECT ?? FROM ?? WHERE ?? = ?`
    sql = mysql.format(sql, ['*', 'employees', 'first_name', req.params.first_name])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}






// router.get('/:first_name', employeesController.getEmployeeByFirstName)

// router.get('/:emp_no', employeesController.getEmployeeById)

// router.post('/', employeesController.createNewEmployee)

// router.put('/:emp_no', employeesController.updateEmployeeById)

// router.delete('/:emp_no', employeesController.deleteEmployeebyId)

module.exports = {
    getAllEmployees,
    getEmployeeById,
    getEmployeeByFirstName
}