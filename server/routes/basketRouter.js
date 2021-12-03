const Router = require('express')
const BasketController = require('../controllers/basketController')
const router = new Router()

router.post('/put', BasketController.putDevice)
router.post('/remove', BasketController.removeDevice)
router.get('/update', BasketController.updateBasket)
router.post('/', BasketController.getBasket)


module.exports = router
