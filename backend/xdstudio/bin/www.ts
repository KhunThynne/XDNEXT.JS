#!/usr/bin/env node
import app from "@/index";
import chalk from "chalk";
import http from "http";
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
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof Port === "string" ? "Pipe " + Port : "Port " + Port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");

      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  console.log(chalk.green(`Server listening on ${bind}`));
}

const Port = normalizePort(process.env.PORT);
app.set("Port", Port);
server.listen(Port);
server.on("error", onError);
server.on("listening", onListening);

console.log(
  chalk.bgBlue.white.bold("\n🚀 Application Started 🚀") +
    "\n" +
    chalk.yellow("Listening on port: ") +
    chalk.cyan(Port) +
    "\n\n" +
    chalk.green(`👉 http://localhost:${Port}`) +
    "\n" +
    chalk.green(`👉 http://127.0.0.1:${Port}`) +
    "\n",
);
// Setting up a variety of color code constants

// Change the color constant below and see what happens!
