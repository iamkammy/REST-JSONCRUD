// employees.js
var faker = require('faker')
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var employee_name = faker.name.firstName();
    var employee_salary = faker.random.number();
    var employee_age = faker.random.number();
    employees.push({
      "id": id,
      "employee_name": employee_name,
      "employee_salary": employee_salary,
      "employee_age": Math.floor(Math.random()*10) *10
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees