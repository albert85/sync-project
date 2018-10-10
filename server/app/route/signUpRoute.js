import express from 'express';
import users from '../controller/SignUpController';
import validator from '../controller/Validator';

const route = express.Router();

route.post('/signup', validator.validateSignup ,users.createUser);

export default route;