import IUser from "./IUsers"

type Token = {
  token: string,
  userData: {
    id: number,
    name: string,
    role: string,
  },
}

export default interface IMessage {
  type: number,
  message:
  | IUser
  | Token
  | string
}