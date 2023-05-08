type Token = {
  token: string,
}

export default interface IMessage {
  type: number,
  message:
  | Token
  | string
}