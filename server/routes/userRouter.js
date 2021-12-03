const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const { User } = require('../models/models')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.checkAuth)


module.exports = router