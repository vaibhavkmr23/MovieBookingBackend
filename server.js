//  initialisation of express
const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
const port = 8085;

const corsOptions = {
    origin: "http://localhost:3000",
};
// const http = require("http");
// const httpStatus = require("http-status-codes");
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const routeResponseMap = {
//     "/movies": "All Movies Data in JSON format from Mongo DB",
//     "/genres": "All Genres Data in JSON format from Mongo DB",
//     "/artists": "All Artists Data in JSON format from Mongo DB"
// };


// const app = http.createServer((req, res) => {
//     console.log("Received an incoming request!");
//     if (routeResponseMap[req.url]) {
//         res.writeHead(httpStatus.StatusCodes.OK, { "Content-Type": "text/html" });
//         res.end(routeResponseMap[req.url]);
//     }
//     else {
//         res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
//         res.end();
//     }

// })

app.use(cors());

app.get("/", (req, res) => {
    res.status(200);
    res.json({
        message: "Welcome to Upgrad Movie booking application development."
    });
});


require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/movie.routes")(app);
require("./routes/user.routes")(app);


app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});

////-----------------------------///

const db = require("./models");
// console.log(" db value", db);

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });