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

  async postRegister(req: Request, res: Response) {
    const { password, email } = req.body;
    const newUser = await this._service.postRegister(req.body);
  
    if (newUser.type === 201) {
      const { message } = await this._service.postLogin({ email, password });
  
      return res.status(newUser.type).json(message);
    }

    return res.status(newUser.type).json({ message: newUser.message });
  };

  async deleteUser (req: Request, res: Response) {
    const { id } = req.params;
  
    try {
      await this._service.deleteUser(Number(id));
  
      return res.status(200).end();
    } catch (error) {
      return res.status(400).json({ message: 'not found' });
    }
  };

  async getUsers (req: Request, res: Response) {
    const users = await this._service.getUsers();

    return res.status(200).json({ users });
  }
}

export default UserController;