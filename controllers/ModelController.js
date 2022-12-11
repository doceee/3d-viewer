const Model = require("../models/Model");
const { randomBytes } = require("crypto");
const { promises } = require("fs");

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
            const { fileName } = await Model.findById(req.params.id);

            return res.send(fileName);
        } catch (err) {
            return next(err);
        }
    },

    async download(req, res, next) {
        try {
            const { fileName, extension, name } = await Model.findById(
                req.params.id
            );

            const file = `public/${fileName}.${extension}`;

            return res.download(file, `${name}.${extension}`);
        } catch (err) {
            return next(err);
        }
    },

    async create(req, res, next) {
        try {
            const file = req.files.file;
            const { tempFilePath } = file;
            const [name, extension] = file.name.split(".");
            const fileName = randomBytes(12).toString("hex");

            await promises.rename(
                tempFilePath,
                `public/${fileName}.${extension}`
            );

            const newModel = await Model.create({
                name,
                fileName,
                extension,
                path: `public/${fileName}.${extension}`
            });

            const model = await Model.findById(newModel.id);

            return res.send(model);
        } catch (err) {
            return next(err);
        }
    },

    async delete(req, res, next) {
        try {
            const model = await Model.findById(req.params.id);

            if (model) {
                await promises.unlink(model.path);
            }

            await Model.findByIdAndRemove(req.params.id);

            return res.sendStatus(204);
        } catch (err) {
            return next(err);
        }
    }
};
