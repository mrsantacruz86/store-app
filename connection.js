require('dotenv').config();
console.log('Loading Connection Setup...');

exports.config = {
	host: process.env.HOST,
	user: process.env.DBUSER,
	password: process.env.DBPASSWORD,
	port: process.env.PORT,
	database: process.env.DATABASE
};
// connection.connect();

