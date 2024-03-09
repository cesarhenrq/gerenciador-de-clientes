export default class BadRequestError extends Error {
  constructor(message: string = "Dados inválidos.") {
    super(message);
    this.name = "BadRequestError";
  }
}
