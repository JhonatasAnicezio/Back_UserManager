import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import IUser from '../interfaces/IUsers';

interface iTokenPayload {
  payload: IUser;
}

class JWTUtil {
  private _secret = process.env.JWT_SECRET as string;

  generateToken(payload: iTokenPayload): string {
    const config: jwt.SignOptions = {
      expiresIn: '3d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ payload }, this._secret, config);
    return token;
  }

  verifyToken(token: string): iTokenPayload {
    const payload = jwt.verify(token, this._secret) as iTokenPayload;
    return payload;
  }
}

export default JWTUtil;