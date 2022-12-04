const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        fileName: { type: String, required: true },
        extension: { type: String, required: true },
        path: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

module.exports = Model = mongoose.model("model", modelSchema);
