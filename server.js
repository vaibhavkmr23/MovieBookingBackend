const port = 9000;
const http = require("http");
const httpStatus = require("http-status-codes");

// const db = require("./models");

const routeResponseMap = {
    "/movies": "All Movies Data in JSON format from Mongo DB",
    "/genres": "All Genres Data in JSON format from Mongo DB",
    "/artists": "All Artists Data in JSON format from Mongo DB"
};


const app = http.createServer((req, res) => {
    console.log("Received an incoming request!");
    if (routeResponseMap[req.url]) {
        res.writeHead(httpStatus.StatusCodes.OK, { "Content-Type": "text/html" });
        res.end(routeResponseMap[req.url]);
    }
    else {
        res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
        res.end();
    }

})
app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);

////-----------------------------///

// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");

//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });