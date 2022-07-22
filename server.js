const http = require('http');
const app = require('./app/app');

require('dotenv').config();


const server = http.createServer(app);

const port = process.env.Port || 8000
server.listen(port, () => {
    console.log("lisening to port" + port)
})