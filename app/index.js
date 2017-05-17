// const calc = require('./calc');

// const numbersToAdd = [3,4,5,14];

// const result = calc.sum(numbersToAdd);
// console.log(`The result is: ${result}`);

// ==================================
// ==================================

// const fs = require('fs');
// let content
// try {
// 	content = fs.readFileSync('file.md', 'utf-8');
// } catch (ex){
// 	console.log(ex);
// }

// console.log(content);

// ==================================
// ==================================
// Demonstrate the use of callbacks
// const numbers = [2,3,4,5,6];

// function isBiggerThanTwo(num){
// 	return num > 2;
// }

// numbers.filter(isBiggerThanTwo);

// ==================================
// ==================================

// const fs = require('fs');

// console.log("start reading a file...");
// fs.readFile('file.md', 'utf-8', function(err, content){
// 	if(err){	//instead of a try-catch, check for errors in callback
// 		console.log("error happened during reading the file")
// 		return console.log(err);
// 	}

// 	console.log(content); //no return value, values passed to callbacks
// });

// console.log("end of the file");


// ==================================
// ==================================
// Node Server
// const http = require('http');
// const port = 3000;

// const requestHandler = (request, response) => {
// 	console.log(request.url);
// 	response.end("Hello Node.js Server!");
// }

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
// 	if(err){
// 		return console.log("something bad happened", err);
// 	}

// 	console.log(`server is listening on port ${port}`);
// })

const express = require('express')
const app = express()
const port = 3000

app.use((request, response, next) => {
	console.log(request.headers);
	next();
});

app.use((request, response, next) => {
	request.chance = Math.random();
	next();
});

app.get('/', (request, response) => {
	// response.json({
	// 	chance: request.chance
	// });
	throw new Error('oops');
});

app.use((err, request, response, next) => { //error handler function should be the last function added with app.use
	console.log(err);
	response.status(500).send('Something broke!');
});

app.listen(port, (err) => {
	if(err){
		return console.log("something bad happened", err);
	}

	console.log(`server is listening on port ${port}`);
});