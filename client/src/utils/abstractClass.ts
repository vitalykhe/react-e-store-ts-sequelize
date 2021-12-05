export class MD {
  private connectionString: string
  constructor(public url: string, public port: number) {
    this.connectionString = url + port.toString()
  }

}
