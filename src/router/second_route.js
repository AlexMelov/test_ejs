const express = require("express");
const router = express.Router();

router.get("/second-page", (req, res, next) => {
    res.render("pages/second-route");
});

module.exports = router;
