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

  async postRegisterUser(req: Request, res: Response) {
    const { password, email } = req.body;
    const newUser = await this._service.postRegister(req.body);
  
    if (newUser.type === 201) {
      const { message } = await this._service.postLogin({ email, password });
  
      return res.status(newUser.type).json(message);
    }

    return res.status(newUser.type).json(newUser.message);
  };

  async postRegisterAdmin(req: Request, res: Response) {
    const newUser = await this._service.postRegister(req.body);

    return res.status(newUser.type).json(newUser.message);
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

  async getActualUser (req: Request, res: Response) {
    const { payload } = req.body.token;

    const user = await this._service.getActualUser(payload.id);

    return res.status(user.type).json(user.message);
  }

  async updateUsers (req: Request, res: Response) {
    const { id } = req.params;
    const { role } = req.body;

    try {
      await this._service.updateUsers(Number(id), role);
      return res.status(200).json({ message: 'successfully updated' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

export default UserController;