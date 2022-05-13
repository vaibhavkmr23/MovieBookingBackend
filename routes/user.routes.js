module.exports = app =>{
    const users = require("../controllers/user.controller");
    var router = require("express").Router();

    app.post("/signup", users.signUp);

    app.post("/login", users.login);

    app.post("/logout", users.logout);

    router.get("/getCouponCode", users.getCouponCode);

    router.put("/bookshow", users.bookShow);

    app.use("/", router);
}