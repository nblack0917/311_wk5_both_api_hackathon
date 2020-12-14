const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require('./routers/employees');

const app = express();

app.use(bodyParser.json())
app.use(employeesRouter)

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});