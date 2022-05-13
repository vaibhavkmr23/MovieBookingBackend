module.exports = app =>{
    const movies = require("../controllers/movie.controller");
    var router = require("express").Router();

    app.get("/movies" , movies.findAllMovies);

    app.get("/movies?status=PUBLISHED", movies.findAllMovies);

    app.get("/movies?status=RELEASED", movies.findAllMovies);

    app.get("/movies/{movieId}", movies.findOne);

    app.get("/movies?status=RELEASED&title={title}&genres={genres}&artists={artists}&start_date={startdate}&end_date={enddate}", movies.findAllMovies);

    app.get("/movies:id/shows", movies.findShows);
    
    app.use("/api", router);
}