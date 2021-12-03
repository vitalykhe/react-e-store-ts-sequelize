const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/apiError");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, description, price, typeId, brandId, device_info } =
        req.body;
      const { img_url } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img_url.mv(path.resolve(__dirname, "..", "static", fileName));

      const di = JSON.parse(device_info);

      const device = await Device.create({
        name,
        description,
        price,
        typeId,
        brandId,
        img_url: fileName,
      });

      if (device && di) {
        DeviceInfo.bulkCreate(
          di.map((el) => ({
            property_name: el.property_name,
            property_value: el.property_value,
            deviceId: device.id,
          }))
        );
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {

    let { limit, page, selectedBrands, typeId} = req.query;
    console.log(selectedBrands)

    page = page || 1;
    limit = limit || 8;
    let offset = page * limit - limit;

    let devices;
    if (!selectedBrands && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (!selectedBrands && typeId) {
      devices = await Device.findAndCountAll({
        where: {
          typeId,
        },
        limit,
        offset,
      });
    }
    if (selectedBrands && !typeId) {

      devices = await Device.findAndCountAll({
        where: {
          brandId:  selectedBrands
        },
        limit,
        offset,
      });
    }
    if (selectedBrands && typeId) {
      devices = await Device.findAndCountAll({
        where: {
          brandId: selectedBrands,
          typeId,
        },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [
        {
          model: DeviceInfo,
        },
      ],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
