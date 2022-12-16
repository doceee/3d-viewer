const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload({ useTempFiles: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    "OPTIONS" === req.method ? res.sendStatus(200) : next();
});

require("./routes/models")(app);

app.use(function (error, req, res, next) {
    console.error(error);

    return res.status(500).send({ error });
});

app.use(express.static("client/build"));

app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

mongoose
    .connect(`${process.env.MONGO_URL}`, {
        autoIndex: true,
        autoCreate: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB connection established successfully.");
        app.listen(process.env.PORT, () => {
            console.info(`Server running on port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
