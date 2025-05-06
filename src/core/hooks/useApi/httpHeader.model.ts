export default class HttpHeader {
  key?: string;
  value: any;

  public constructor(init?: Partial<HttpHeader>) {
    Object.assign(this, init);
  }
}
