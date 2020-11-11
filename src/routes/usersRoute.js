import {Router} from 'express';
import userController from '../controllers/usersController';

const router = Router();

router.post('/login', userController.login);

export default router;