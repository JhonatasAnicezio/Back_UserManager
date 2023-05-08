import User from '../../database/models/Users';
import IMessage from './IUtils';

export type Login = {
  email: string,
  password: string,
}

export default interface IServiceUser {
  postLogin(user: Login):Promise<IMessage>
  postRegister(user: User):Promise<IMessage>
}