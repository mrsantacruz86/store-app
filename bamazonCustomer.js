const mysql = require('mysql');
const conn = require('./connection');
const inquirer = require('inquirer');
console.log('Loading Connection...');

var connection = mysql.createConnection(config);
connection.connect(function (err) {
  console.log(err);
  console.log(`Connected as id: ${connection.threadId}`);
  start();
});

function start() {
  inquirer.prompt({
    name: "postOrBid",
    type: "list",
    message: "would you like to [POST] an auction or [BID] on an auction?",
    choices: ["POST", "BID"]
  }).then(function (answer) {
    if (answer.postOrBid.toUpperCase() === "POST") {
      postAuction();
    } else {
      bidAuction();
    }
  });
}
function postAuction() {
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
