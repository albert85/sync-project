import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import validator from 'express-validator';

import routes from './app/route/index';

// instantial express
const app = express();

// Configure morgan
app.use(morgan("dev"));

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(validator());

// Link route to server
app.use('/api/v1', routes);

const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
// res.send("Hello harriet");
// }) 

app.listen(PORT, () => {
    console.log(`Server is running on port No: ${PORT}`);
})
