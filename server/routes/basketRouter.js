const Router = require('express')
const BasketController = require('../controllers/basketController')
const router = new Router()

router.put('/put', BasketController.putDevice)
router.delete('/remove', BasketController.removeDevice)
router.update('/update', () => {})
router.get('/', BasketController.getBasket)


module.exports = router
