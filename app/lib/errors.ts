export class AppError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class Unauthorized extends AppError {
  constructor() {
    super('Unauthorized');
  }
}
