const express = require("express");
const router = express.Router();

router.get("/sec", (req, res, next) => {
    res.render("pages/sec");
});

module.exports = router;
