import { Exception } from '@adonisjs/core/exceptions'
import logger from '@adonisjs/core/services/logger'

export interface MetierExceptionProps {
  code: string
  message: string
  httpStatus: number
  log: string
  isWarning?: boolean
}

export default class MetierException implements Exception {
  name: string
  message: string
  status: number
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

  constructor({ code, message, httpStatus, log, isWarning }: MetierExceptionProps) {
    if (isWarning) {
      logger.warn(log)
    } else {
      logger.error(log)
    }
    this.name = code
    this.message = message
    this.status = httpStatus
  }
}
