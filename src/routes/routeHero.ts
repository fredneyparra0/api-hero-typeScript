import { Router, Request, Response } from 'express';
import { heroById, insertHero } from '../controllers/heroController'
import validateToken from '../middlewares/validateToken'

const routerHero = Router();

routerHero.get('/', validateToken ,heroById)

routerHero.post('/', validateToken ,insertHero)

export default routerHero