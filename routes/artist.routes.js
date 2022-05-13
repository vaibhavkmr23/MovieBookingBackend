module.exports = app => {
    const artists = require("../controllers/artist.controller");
    var router = require("express").Router();

    router.get("/artists", artists.findAllArtists );

    app.use("/", router);
}