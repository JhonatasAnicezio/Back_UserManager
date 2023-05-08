import { Request, Response } from 'express';
import IServiceUser from '../interfaces/IServiceUser';

class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async postLogin(req: Request, res: Response) {
    const { type, message } = await this._service.postLogin(req.body);
    return res.status(type).json(message);
  }
}

export default UserController;