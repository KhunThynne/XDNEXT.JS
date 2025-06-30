import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
require('dotenv').config();
// require('dotenv').config({ path: '.env.production' });


import logger from 'morgan';
// const express = require('express')
const app = express()
// import { Server } from "socket.io";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { createHandler } from 'graphql-http/lib/use/express';
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const root = {
  hello: () => 'สวัสดีจาก GraphQL + Express!'
};
app.engine('html', require('ejs').renderFile);
app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('title', 'Thynne');
// app.use(express.static(path.join(__dirname, './src')));
app.use(cookieParser())


app.use(require('./src/controller'));

app.all(
  '/graphql',
  createHandler({
    schema: schema,
  }),
);
 

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    res.send(err)
});

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("success");
});



app.use(cors({
    "origin": '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,

    "optionsSuccessStatus": 204
}))











app.use(require('./bin/midleware/error'));
export default app;