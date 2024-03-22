/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

const AuthenticationController = () => import('#controllers/authentication_controller')

router.post('/api/v1/user/register', [AuthenticationController, 'register'])
