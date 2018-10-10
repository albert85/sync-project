import express from 'express';
import signUpRoute from './signUpRoute';

const app = express();

app.use(signUpRoute);

export default app;

