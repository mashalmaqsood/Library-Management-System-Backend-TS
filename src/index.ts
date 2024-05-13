import { Express } from "express";
import express from "express";
import dotenv from "dotenv"
const app : Express = express();

dotenv.config();
app.use(express.json());

const book = require('./routes/book');
const copy = require('./routes/copy');
const loan = require('./routes/loan');
const member = require('./routes/member');
const transaction = require('./routes/transaction');

app.use('/api/books',book);
app.use('/api/copies',copy);
app.use('/api/loan',loan);
app.use('/api/member',member);
app.use('/api/transaction',transaction);

export default app;


