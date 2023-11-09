class CustomError extends Error {
  statusCode = 400

  constructor (statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode

    Object.setPrototypeOf(this, CustomError.prototype)
  }

  getErrorMessage (): string {
    return 'Something went wrong: ' + this.message
  }
}

export default CustomError
