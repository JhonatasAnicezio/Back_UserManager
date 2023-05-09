import { Router, Request, Response } from 'express';
import authToken from '../middlewares/authToken';
import validateFieldsUser from '../middlewares/validateFieldsUser';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const teamRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

teamRouter.post(
  '/login',
  validateFieldsUser.verify,
  (req: Request, res: Response) => userController.postLogin(req, res),
);

teamRouter.put(
  '/',
  validateFieldsUser.verify,
  (req: Request, res: Response) => userController.postRegister(req, res),
);

teamRouter.delete(
  '/:id',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.deleteUser(req, res),
);

teamRouter.get(
  '/',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.getUsers(req, res),
);

export default teamRouter;