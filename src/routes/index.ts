import { Router } from 'express';
import routerAuth from './auth.login';
import routerHero from './routeHero';
const router: Router = Router();


// Route from login and register
router.use('/auth', routerAuth)

router.use('/hero', routerHero)

export default router