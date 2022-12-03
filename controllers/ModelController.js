const Model = require('../models/Model');

module.exports = {
  async index(req, res, next) {
    try {
      const models = await Model.find();

      return res.send(models);
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const contract = await Model.findById(req.params.id);

      return res.send(contract);
    } catch (err) {
      return next(err);
    }
  },

  async create(req, res, next) {
    try {
      const newModel = await Model.create(req.body);

      const model = await Model.findById(newModel.id);

      return res.send(model);
    } catch (err) {
      return next(err);
    }
  },

  async delete(req, res, next) {
    try {
      await Model.findByIdAndRemove(req.params.id);

      return res.sendStatus(204);
    } catch (err) {
      return next(err);
    }
  },
};
