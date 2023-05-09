import { Request, Response, NextFunction } from 'express';
import JWTUtil from '../utils/JWTUtil';

const jwtService = new JWTUtil();

class authToken {
  public static verify(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const { payload } = jwtService.verifyToken(authorization);
      req.body.token = payload;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }

  public static verifyAdmin(req: Request, res: Response, next: NextFunction) {
    const { token: { payload } } = req.body;

    if (!payload) {
      return res.status(401).json({ message: 'Token not found in admin' });
    }

    if(payload.role != 'admin') {
      return res.status(401).json({ message: 'Is not admin' });
    }

    return next();
  }
}

export default authToken;