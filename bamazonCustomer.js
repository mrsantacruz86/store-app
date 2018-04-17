const mysql = require('mysql');
const inquirer = require('inquirer');
const { table } = require('table');
const conn = require('./connection');
console.log('Loading Connection...');

var idList = [];

var connection = mysql.createConnection(conn.config);
connection.connect(function (err)
{
  console.log(err);
  console.log(`Connected as id: ${connection.threadId}`);
  //Display a table with all the items
  start();
});

function start()
{
  //call the function to display products data in a table
  displayInventory();
  //Promt the user to select an item by its ID
  console.log("Choose Item!");
  inquirer.prompt(
    [{
      name: "itemId",
      type: "input",
      message: "Type the id of the item you want to buy",
      validate: function (value)
      {
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
      validate: function (value)
      {
        if (isNaN(value) === false) {
          return true;
        } else {
          return false;
        }
      }
    }]
  ).then(function (answer){
    buyItem(answer.itemId, answer.quantity);
  });
}

function displayInventory(){
  let data = [];
  let q = "SELECT item_id, product_name, price , stock_quantity FROM products";
  connection.query(q, function (err, res){
    if (err) throw err;
    data.push(["ID", "Product", "Price", "Quantity"]);
    res.forEach(element => {
      let row = [element.item_id, element.product_name, element.price, element.stock_quantity];
      data.push(row);
    });
    console.log(table(data));
  });
}

function buyItem(item, quantity){
  // Update the amount of items in the inventory
  let q = "UPDATE products SET `stock_quantity`= `stock_quantity` - ? WHERE ?";
  connection.query(q, [quantity, { item_id: item }], function (err, res){
    if (err) throw err;
    // console.log(res);
    start();
  });
}