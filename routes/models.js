const ModelController = require("../controllers/ModelController");

module.exports = (app) => {
    app.get("/api/models", ModelController.index);

    app.get("/api/:id/", ModelController.download);

    app.get("/api/models/:id/", ModelController.show);

    app.post("/api/models", ModelController.create);

    app.delete("/api/models/:id", ModelController.delete);
};
