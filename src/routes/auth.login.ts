import { Router, Request, Response } from 'express';
import { authRegister, authLogin } from '../controllers/authController'

const routerAuth = Router();

routerAuth.post('/register', authRegister)

routerAuth.post('/login', authLogin)

export default routerAuth