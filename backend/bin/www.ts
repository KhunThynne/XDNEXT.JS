#!/usr/bin/env node
import 'module-alias/register';

const app = require('../app');
const http = require('http');

const server = http.createServer(app);
function normalizePort(val: string) {
  const Port = parseInt(val, 10);
  if (isNaN(Port)) {
    return val;
  }
  if (Port >= 0) {
    return Port;
  }
  return false;
}

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof Port === 'string'
    ? 'Pipe ' + Port
    : 'Port ' + Port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
    

      process.exit(1);
      break;
    default:
      throw error;
  }
}


function onListening() {

  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr?.port;




}
const Port = normalizePort(process.env.PORT || '3002');
app.set('Port', Port);
server.listen(Port);
server.on('error', onError);
server.on('listening', onListening);




console.log(`Application use port ${Port}\n\nhttp://localhost:${Port}\nhttp://127.0.0.1:${Port}`)


// Setting up a variety of color code constants


// Change the color constant below and see what happens!





