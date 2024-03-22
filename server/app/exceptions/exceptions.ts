import { httpStatus } from './http.js'
import { MetierExceptionProps } from './metier_exception.js'
import { warnings } from './warnings.js'

export const metierExceptions: Record<string, Record<string, MetierExceptionProps>> = {
  AUTHENTICATION: {
    emailAlreadyExists: {
      code: 'VD01email',
      message: 'Email already exists, please log in.',
      httpStatus: httpStatus.SUCCESS,
      log: warnings.W01,
      isWarning: true,
    },
    usernameAlreadyExists: {
      code: 'VD01username',
      message: 'Username already exists, please log in.',
      httpStatus: httpStatus.SUCCESS,
      log: warnings.W02,
      isWarning: true,
    },
  },
  USERS: {
    isntAdult: {
      code: 'VD01bithdate',
      message: "You're not an adult, you can't register.",
      httpStatus: httpStatus.SUCCESS,
      log: warnings.W03,
      isWarning: true,
    },
  },
}
