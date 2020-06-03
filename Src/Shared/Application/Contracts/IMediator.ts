export interface IMediator {
  send<R>(query: object): Promise<R>;
}
