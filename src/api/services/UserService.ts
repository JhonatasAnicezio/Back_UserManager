import * as bcryptjs from 'bcryptjs';
import User from '../../database/models/Users';
import IMessage from '../interfaces/IUtils';
import IServiceUser from '../interfaces/IServiceUser';
import JWTUtil from '../utils/JWTUtil';

class UserService implements IServiceUser {
  protected model = User;

  private _JWTUtil: JWTUtil = new JWTUtil();

  async postLogin({ email, password }: User): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (!user) return { type: 401, message: 'Invalid email or password' };

    const pass = bcryptjs.compareSync(password, user.password);

    if (!pass) return { type: 401, message: 'Invalid email or password' };

    const token = this._JWTUtil.generateToken(user);

    return { type: 200, message: { token } };
  }
}

export default UserService;