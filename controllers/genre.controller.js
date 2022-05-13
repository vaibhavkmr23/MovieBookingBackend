const db = require("../models");
const Genres = db.genre;

exports.findAllGenres = (req, res) => {
    Genres.find({}).then((data) => {
        res.json( data );
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching Genres", err,
        });
    });
}