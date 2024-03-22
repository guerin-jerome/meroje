import { TABLE_NAMES } from '#database/constants/database'
import db from '@adonisjs/lucid/services/db'
import UserAdapterPort from './ports/users_adapter.port.js'
import { UserRegisterRequest } from './types/users.types.js'

export default class UsersAdapter implements UserAdapterPort {
  async requestUserByEmailOrUsername({ username, email }: UserRegisterRequest) {
    return await db
      .query()
      .from(TABLE_NAMES.users)
      .select('*')
      .where('email', email)
      .orWhere('username', username)
      .limit(1)
  }
}
