import User from '../../database/models/Users';
import IMessage from './IUtils';

export default interface IServiceUser {
  postLogin(user: User):Promise<IMessage>
}