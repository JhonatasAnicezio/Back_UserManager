import User from '../../database/models/Users';
import IUser from './IUsers';
import IMessage from './IUtils';

export type Login = {
  email: string,
  password: string,
}

export default interface IServiceUser {
  postLogin(user: Login):Promise<IMessage>
  postRegister(user: User):Promise<IMessage>
  deleteUser(id: number):Promise<void>
  getUsers():Promise<IUser[]>
  updateUsers(id: number, newRole: string):Promise<void>
  getActualUser(id: number): Promise<IMessage>
}