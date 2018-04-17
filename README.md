# Bamazon

## Description of the Application.

The aplication is divided in three parts:
1. Consumer app.
2. Managers app.
3. Supervisors app.

Each of them run from the files: [`bamazonCustomer.js`](./bamazonCustomer.js), [`bamazonManager.js`](./bamazonManager.js) and [`bamazonSupervisor.js`](./bamazonSupervisor.js).

### 1. Customer App.

Though this app the user will be able to consume items form an existing stock. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale. The app should prompt users for the ID of the product they would like to buy then aks the user how many units of the product they would like to buy.

Once the customer has placed the order, the application shall check if your store has enough of the product to meet the customer's request. If not, the app shall display this message: `"Insufficient quantity!"`, and then prevent the order from going through.
However, if your store does have enough of the product, the orde shall be completed. This will get done by updating the SQL database to reflect the remaining quantity. Once the update goes through, a message will be displayed showing the customer the total cost of their purchase.

### 2. Managers app.

### 3. Supervisors app.

## Database conectivity

For the database we are using a local instance of MySQL.
The configuration parameters are contained on the `.env` file.
This file should be created in order for the application to run.

```sh
DBUSER=root
DBPASSWORD=yourownpassword
HOST=localhost
PORT=3306
DATABASE=bamazon
```

The `SQl` Scripts used to create the database and populate the tables is contained in the script file: [`db.slq`](./db.sql).