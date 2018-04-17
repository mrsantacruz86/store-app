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
/* function postAuction() {
  inquirer.prompt(
    [{
      name: "item",
      type: "input",
      message: "What is the item you wish to submit?"
    }, {
      name: "category",
      type: "input",
      message: "What category do you like to place it in?"
    }, {
      name: "startingBid",
      type: "input",
      message: "What would you like the startig bid to be?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        } else {
          return false;
        }
      }
    }
    ]
  ).then(function (answer) {
    connection.query("INSERT INTO auctions SET ?", {
      itemname: answer.item,
      category: answer.category,
      startingbid: answer.startingBid,
      highestbid: answer.startingBid
    },
      function (err, res) {
        if (err) throw err;
        console.log("Your auction was created successfuly!");
        start();
      });
  });
}

function bidAuction() {
  connection.query("SELECT * FROM auctions", function (err, res) {
    // res.forEach(element => {
    //   console.log(element.itemname);
    // });
    inquirer.prompt({
      name: "choice",
      type: "list",
      message: "What auction would you like to place a bid on?",
      choices: function (value) {
        var choiceArray = [];
        res.forEach(element => {
          choiceArray.push(element.itemname);
        });
        return choiceArray;
      },
    }).then(function (answer) {
      console.log("this is the item you chose: " + answer.choice);
    });
  });
  start();
}
 */

function displayInventory() {
  let data = [];
  let output;
  connection.query(
    "SELECT item_id, product_name, price FROM products",
    function (err, res) {
      if (err) throw err;
      res.forEach(element => {
        let row = [ element.item_id, element.product_name, element.price];
        data.push(row);
      });
      output = table(data);
      console.log(output);
      console.log(table(res));
      start();
    });
}