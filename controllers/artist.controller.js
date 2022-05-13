const db = require("../models");
const Artists = db.artist;

exports.findAllArtists = (req, res) => {
    Artists.find({}).then((data) => {
        res.json( data );
    })
        .catch((err) => {
            res.status(500).send({
                message: "Some Error Occured while fetching artists", err,
            });
        });
}; 
