const express = require("express");
const { create, read, readPreviousSearch } = require("../controllers");

const router = express.Router();

router.post("/searches", create);

router.get("/searches/:web/:category", readPreviousSearch);
router.get("/searches", read);

module.exports = router;
