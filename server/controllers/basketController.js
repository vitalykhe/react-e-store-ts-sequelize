const { BasketDevice } = require("../models/models");
const { Basket } = require("../models/models");
const ApiError = require("../error/apiError");
const { noExtendLeft } = require("sequelize/types/lib/operators");

class BasketController {
  async putDevice(req, res) {
    try {
      const { deviceId, basketId, qty } = req.body;
      const basketId = await Basket.create({ userId });
      const basketDevice = await BasketDevice.create({ basketId, deviceId, qty });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async removeDevice(req, res) {
    try {
      const { basketId, deviceId } = req.query;
      await BasketDevice.destroy({ where: { deviceId } });
      const basketDevice = await BasketDevice.findAll({
        where: { basketId },
      });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getBasket(req, res) {
    try {
      const { basketId } = req.query;
      const basketDevice = await BasketDevice.findAll({
        where: { basketId },
      });
      res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BasketController();
