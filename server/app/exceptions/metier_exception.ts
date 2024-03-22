import { Exception } from '@adonisjs/core/exceptions'

export default class MetierException implements Exception {
  name: string
  message: string
  status: number
  payload?: object
  stack?: string | undefined
  cause?: unknown
  help?: string | undefined
  code?: string | undefined

  toString(): string {
    return this.message
  }

  get [Symbol.toStringTag](): string {
    return this.message
  }

  constructor(name: string, message: string, status: number, payload?: object) {
    this.name = name
    this.message = message
    this.status = status
    this.payload = payload
  }
}
