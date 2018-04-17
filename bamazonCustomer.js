const mysql = require('mysql');
const inquirer = require('inquirer');
const { table } = require('table');
const conn = require('./connection');
console.log('Loading Connection...');

var idList = [];

var connection = mysql.createConnection(conn.config);
connection.connect(function (err) {
  console.log(err);
  console.log(`Connected as id: ${connection.threadId}`);
  //Display a table with all the items
  displayInventory()
});

function start() {
  //Promt the user to select an item by its ID
  var itemId;
  inquirer.prompt(
    [{
      name: "itemId",
      type: "input",
      message: "Type the id of the item you want to buy",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      name: "quantity",
      type: "input",
      message: "How many do you want to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        } else {
          return false;
        }
      }
    }]
  ).then(function (answer) {
    console.log(answer.itemId + " " + answer.quantity)
    // buyItem(answer.itemId, answer.quantity);
  });
}

function displayInventory() {
  let data = [];
  connection.query(
    "SELECT item_id, product_name, price FROM products",
    function (err, res) {
      if (err) throw err;
      data.push(["ID", "Product", "Price"]);
      res.forEach(element => {
        let row = [ element.item_id, element.product_name, element.price];
        data.push(row);
      });
      console.log(table(data));
      start();
    });
}