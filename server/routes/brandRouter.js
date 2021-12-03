const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require('../middleware/roleCheckMiddleware')


router.post('/update', checkRole('ADMIN'), brandController.update)
router.post('/:id', checkRole('ADMIN'), brandController.delete)
router.post("/", brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
