import * as bcryptjs from 'bcryptjs';
import User from '../../database/models/Users';
import IMessage from '../interfaces/IUtils';
import IServiceUser, { Login } from '../interfaces/IServiceUser';
import JWTUtil from '../utils/JWTUtil';

class UserService implements IServiceUser {
  protected model = User;

  private _JWTUtil: JWTUtil = new JWTUtil();

  async postLogin({ email, password }: Login): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (!user) return { type: 401, message: 'Invalid email or password' };

    const pass = bcryptjs.compareSync(password, user.password);

    if (!pass) return { type: 401, message: 'Invalid email or password' };

    const token = this._JWTUtil.generateToken(user);

    return { type: 200, message: { token } };
  }

  async postRegister({ name, email, password, role }: User): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { email },
      attributes: { exclude: ['password', 'id'] },
    });
  
    if (user) {
      return { type: 409, message: 'Conflict' };
    }

    const saltRounds = 8;

    const hashedPassword = bcryptjs.hashSync(password, saltRounds);

    await this.model.create({ name, email, password: hashedPassword, role });

    return { type: 201, message: 'Created' };
  }

  async deleteUser(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}

export default UserService;