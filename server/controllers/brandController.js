const { Brand } = require('../models/models');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    res.json(brand);
  }
  async getAll(req, res) {
      const allBrands = await Brand.findAll() 
      return res.json(allBrands)
  }

  async delete(req, res) {
    const { id } = req.params;
    await Brand.destroy({ where: { id } });
    const allBrands = await Brand.findAll();
    return res.json(allBrands);
  }

  async update(req, res) {
    const brandsForUpdate = req.body
    // let transaction = models.sequelize.transaction();
    console.log(brandsForUpdate)
    for(let i = 0; i < brandsForUpdate.length; i++) {
      try {
        const updateResult = await Brand.update(
          { name: brandsForUpdate[i].name }, 
          { where: { id: brandsForUpdate[i].id } }
        )
      } catch (error) {
        console.log(error.message);
        return res.json(error.message)
      }
    }
    return res.json('OK') 
  }
}

module.exports = new BrandController();
