const express = require("express");
const router = express.Router();
const submitHandler = require("../../public/script/functions");

router.get("/", (req, res, next) => {
    res.render("pages/home-route", {
        submit: submitHandler,
    });
});

module.exports = router;
