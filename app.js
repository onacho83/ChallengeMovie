require("dotenv").config();
const Server = require("./server/server");

console.log("hola");

const server = new Server();

server.listen();
