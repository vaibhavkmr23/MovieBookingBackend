const dbConfigUrl = require("../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.url = dbConfigUrl.url;
db.mongoose = mongoose;
db.artist = require("./artist.model")(mongoose);
db.genre = require("./genre.model")(mongoose);
db.movie = require("./movie.model")(mongoose);
db.user = require("./user.model")(mongoose);

module.exports = db;
