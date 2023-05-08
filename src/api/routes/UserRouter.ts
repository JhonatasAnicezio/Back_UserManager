import { Router, Request, Response } from 'express';
// import authToken from '../middleware/authToken';
// import validateUser from '../middleware/validateUser';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const teamRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

teamRouter.post(
  '/login',
  (req: Request, res: Response) => userController.postLogin(req, res),
);

teamRouter.put(
  '/register',
  (req: Request, res: Response) => userController.postRegister(req, res),
);

export default teamRouter;