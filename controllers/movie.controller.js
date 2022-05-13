const db = require("../models");
const Movies = db.movie;

// Api getting Movies by Status
exports.findAllMovies = (req, res) => {
    const { status, title, genres, artists, start_date, end_date } = req.query; // retrieves query paramaters
    if (status === undefined) {
        Movies.find({})
            .then(data => res.json({ data: data }))
            .catch(err => res.status(500).send({ message: "Some Error Occured while fetching movies", }));
    } else if (status === 'PUBLISHED') {
        Movies.find({ published: true })
            .then(data => res.send(data))
            .catch(err => req.status(500).send({ message: "Some Error Occured while fetching movies", }));
    } else if (status === 'RELEASED') {
        Movies.find({ released: true })
            .then(data => res.send(data))
            .catch(err => req.status(500).send({ message: "Some Error Occured while fetching movies", }));
    } else {
        res.status(400).send({ message: "invalid query string" });
    }
};

// API to to fetch all details of a movie given its id.
exports.findOne = (req, res) => {
    const { movieId } = req.params.movieId; // get id from params
    Movies.find({ movieid: movieId })
        .then((data) => {
            if (data === null) {
                res.send({ message: "Movie ID invalid" });
            } else {
                res.json({ data: data });
            }
        }).catch((err) => {
            res.status(500).send({
                message: "Movie Not Found", err,
            });
        });
};


// Api to fetch details of shows of a specific movie given its id.
exports.findShows = (req, res) => {
    Movies.find({}).select("shows").then((data) => {
        if (data === null) {
            res.send({ message: "Movie ID invalid" });
        } else {
            res.json({ data: data });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Movie Not Found", err ,
        });
    });
}