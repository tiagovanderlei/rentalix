export class AppError {
  public readonly statusCode: number;

  constructor(public readonly message: string, statusCode = 400) {
    this.statusCode = statusCode;
  }
}
